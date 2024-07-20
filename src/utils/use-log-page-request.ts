import { appConfig } from "config";
import { collectClientMetrics } from "./client-metrics";

export const logPageRequest = async () => {
    if (typeof window !== 'undefined') {

        const metrics = await collectClientMetrics();
        const document = {
            ...metrics,
            timestamp: new Date().toISOString(),
            url: window.location.href,
        };

        try {
            const response = await fetch(`${appConfig.appengine.host}/tools/web-visit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(document),
            });
            if (!response.ok) {
                console.error('Failed to log page request:', response.statusText);
            }
        } catch (error) {
            console.error('Error logging page request:', error);
        }
    }
};

