import { useChatStore } from "chat-store";
import { appConfig } from "config";


const register = async (data) => {
    const { email, name, phone, message } = data
    const { orgId, appId, appKey } = useChatStore.getState()
    const authURL = `${appConfig.appengine.host}/profile/guest/auth`
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            orgid: orgId,
            appKey: appKey,
            appId: appId,
        },
        body: JSON.stringify({ email, name, phone, message })

    };
    const authResponse: any = await fetch(authURL, settings);
    return authResponse
}

const submitForm = async (data) => {
    const { email, name, phone, message, } = data
    const { orgId, appId, appKey, chatId } = useChatStore.getState()
    const authURL = `${appConfig.appengine.host}/crm/contact-form/json/chat-client/${chatId}`
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            orgid: orgId,
            appKey: appKey,
            appId: appId,
        },
        body: JSON.stringify({ email, name, phone, message, chatId })

    };
    const authResponse: any = await fetch(authURL, settings);
    return authResponse
}

const getChatConfig = async ({ orgId, appId, appKey, chatId }) => {
    const authURL = `${appConfig.appengine.host}/chat/config/${chatId}`
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            orgid: orgId,
            appKey: appKey,
            appId: appId,
        },
    };
    const chatConfigResponse: any = await fetch(authURL, settings);
    const chatConfigResponseJson = await chatConfigResponse.json()
    return chatConfigResponseJson
}

const endChat = async () => {

}

export const restHelper = { register, getChatConfig, submitForm }