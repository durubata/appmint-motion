import { appConfig } from "config";
import { createBaseData, useChatStore } from "chat-store";
import UAParser from 'ua-parser-js';

export const logPageRequest = async () => {
    if (typeof window !== 'undefined') {
        const metrics = await collectClientMetrics();
        const document = {
            ...metrics,
            timestamp: new Date().toISOString(),
            source: 'chat-client',
            chatId: useChatStore.getState().chatId,
        };

        const baseData = createBaseData('web_visit');
        baseData.data = document;
        try {
            // const response = await fetch(`${appConfig.appengine.host}/tools/web-visit`, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json', orgId: useChatStore.getState().orgId },
            //     body: JSON.stringify(baseData),
            // });
        } catch (error) {
            console.error('Error logging page request:', error);
        }
    }
};

export async function collectClientMetrics() {
    const parser = new UAParser(navigator.userAgent);
    const result = parser.getResult();
    const browser = result.browser.name;
    const browserVersion = result.browser.version;
    const os = result.os.name;
    const osVersion = result.os.version;
    const deviceType = result.device.type;
    const deviceVendor = result.device.vendor;
    const deviceModel = result.device.model;
    const deviceType2 = result.device.type || (/Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop');
    const browserInfo = { browser, browserVersion, os, osVersion, deviceType: deviceType2, deviceVendor, deviceModel, host: window.location.host, language: navigator.language, url: window.location.href };

    let latitude = null;
    let longitude = null;
    try {
        const { latitude: lat, longitude: lon }: any = {};//await Location();
        latitude = lat;
        longitude = lon;
    } catch (e) {
        console.error(e)
    }

    return {
        ...browserInfo,
        deviceType,
        latitude,
        longitude,
    };
}