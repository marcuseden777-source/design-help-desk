'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, User, Bot, ArrowRight, BookOpen } from 'lucide-react';
import gsap from 'gsap';

import ArticleStack from './ArticleStack';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type?: 'text' | 'reasoning' | 'article-stack';
}

export default function ConversationEngine() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Welcome to the Design Help Desk. I am your Reasoning Engine for high-end interior architecture. How can I assist your vision today?",
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBriefButton, setShowBriefButton] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/reason', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      
      const data = await response.json();
      setIsTyping(false);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
      };
      
      setMessages(prev => [...prev, assistantMessage]);

      if (messages.length > 2) {
        setShowBriefButton(true);
      }
    } catch (error) {
      console.error('Chat Error:', error);
      setIsTyping(false);
    }
  };

  const handleGenerateBrief = async () => {
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: 'Design Enthusiast',
          vision: messages.find(m => m.role === 'user')?.content || 'Exploring 2026 Trends',
          recommendations: messages.filter(m => m.role === 'assistant').map(m => m.content),
        }),
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Design_Help_Desk_Brief.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error('PDF Error:', error);
    }
  };

  return (
    <div className="conversation-container">
      <div className="messages-flow" ref={scrollRef}>
        <AnimatePresence>
          {messages.map((msg) => (
            <div key={msg.id}>
              <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                className={`message-wrapper ${msg.role}`}
              >
                <div className="icon-holder">
                  {msg.role === 'user' ? <User size={18} /> : <Sparkles size={18} />}
                </div>
                <div className="message-bubble glass">
                  <p>{msg.content}</p>
                </div>
              </motion.div>
              {msg.id === messages[messages.length - 1].id && msg.role === 'assistant' && messages.length > 2 && (
                <ArticleStack />
              )}
            </div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="typing-indicator"
            >
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <span className="serif italic ml-2 text-sm">Reasoning Engine Active...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="action-row">
        {showBriefButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleGenerateBrief}
            className="brief-btn glass"
          >
            <BookOpen size={16} className="mr-2" />
            GENERATE HELPER&apos;S BOOK
          </motion.button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="input-area glass">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your design vision..."
          className="chat-input"
        />
        <button type="submit" className="send-btn" disabled={!input.trim() || isTyping}>
          <ArrowRight size={20} />
        </button>
      </form>

      <style jsx>{`
        .action-row {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .brief-btn {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          color: var(--accent-blue);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          border-color: rgba(0, 122, 255, 0.3);
        }

        .brief-btn:hover {
          background: rgba(0, 122, 255, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 122, 255, 0.2);
        }
        .conversation-container {
          display: flex;
          flex-direction: column;
          height: 80vh;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          position: relative;
        }

        .messages-flow {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 40px 10px;
          scrollbar-width: none;
        }

        .messages-flow::-webkit-scrollbar {
          display: none;
        }

        .message-wrapper {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          max-width: 85%;
        }

        .message-wrapper.user {
          flex-direction: row-reverse;
          align-self: flex-end;
        }

        .icon-holder {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .message-bubble {
          padding: 20px 24px;
          font-size: 1.05rem;
          line-height: 1.6;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .user .message-bubble {
          background: rgba(0, 122, 255, 0.1);
          border-color: rgba(0, 122, 255, 0.2);
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-secondary);
          margin-left: 60px;
        }

        .dot {
          width: 4px;
          height: 4px;
          background: var(--accent-blue);
          border-radius: 50%;
          animation: pulse 1.5s infinite ease-in-out;
        }

        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        .input-area {
          margin-top: 20px;
          display: flex;
          align-items: center;
          padding: 8px 8px 8px 24px;
          gap: 12px;
          border-radius: 100px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .chat-input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          font-size: 1.1rem;
          padding: 12px 0;
          outline: none;
        }

        .chat-input::placeholder {
          color: var(--text-muted);
        }

        .send-btn {
          width: 48px;
          height: 48px;
          background: var(--accent-blue);
          border: none;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 122, 255, 0.5);
        }

        .send-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }
      `}</style>
    </div>
  );
}
