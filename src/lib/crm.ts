/**
 * Design Help Desk - Unified CRM & Lead Logic
 * 
 * This module centralizes lead capture and redirects, making the platform 
 * ready to serve as a "Plugin" for external sites while collecting consolidated data.
 */

export type LeadSource = 'direct' | 'plugin' | 'referral';

export interface LeadData {
  id: string;
  timestamp: string;
  source: LeadSource;
  websiteOrigin?: string; // The site where the plugin was hosted
  briefId?: string; // Link to generated design brief
  metadata: Record<string, any>;
}

/**
 * Routes a new lead to the CRM or Webhook destination.
 * Support for future HubSpot/Salesforce integration can be added here.
 */
export const captureLead = async (data: LeadData) => {
  console.log('Capture Lead Triggered:', data);
  
  // Scaffolding for future Webhook / CRM call
  try {
    // const response = await fetch(process.env.CRM_WEBHOOK_URL!, {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // });
    return { success: true, refId: `HELP-${Date.now()}` };
  } catch (error) {
    console.error('Lead Capture Failed:', error);
    return { success: false };
  }
};

/**
 * Handles redirects to creator portfolios or external partner sites
 * while tracking high-intent clicks for the CRM.
 */
export const trackAndRedirect = (destination: string, context: string) => {
  console.log(`Tracking high-intent click to ${destination} from ${context}`);
  // In a real implementation, we would fire a tracking pixel or event here
  window.open(destination, '_blank');
};
