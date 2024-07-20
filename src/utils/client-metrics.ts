// utils/collectClientMetrics.ts
import UAParser from 'ua-parser-js';

async function Location() {
    return new Promise<{ latitude: number; longitude: number }>((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geolocation is not supported in this browser.'));
        }
    });
}

export async function collectClientMetrics() {
    const parser = new UAParser();
    parser.setUA(navigator.userAgent);
    const result = parser.getResult();

    const browserInfo = {};
    Object.keys(result).forEach(key => {
        if (typeof result[key] === 'object') {
            Object.keys(result[key]).forEach(subKey => {
                browserInfo[`${key}.${subKey}`] = result[key][subKey];
            });
        } else {
            browserInfo[key] = result[key];
        }

    })


    const deviceType = result.device.type || (/Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop');
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