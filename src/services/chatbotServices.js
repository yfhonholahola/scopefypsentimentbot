import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from 'root/google/config';

const setDialogflow = (language) => {
    return new Promise((res,rej) => {
        let dialogflowLang;
        switch (language) {
            case 'zh-HK':
                dialogflowLang = Dialogflow_V2.LANG_CHINESE_HONGKONG
                break;
            case 'en':
            default:
                dialogflowLang = Dialogflow_V2.LANG_ENGLISH_US
        }

        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            dialogflowLang,
            dialogflowConfig.project_id
        )
        res();
    })
}

function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function isGeneratorFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object GeneratorFunction]';
}

const sendRequest = (message) => {
    console.log('sendRequest service', message);

    return new Promise((res, rej) => {
        Dialogflow_V2.requestQuery(
            message,
            result => { res({result}) },
            error => { rej({error}) }
        )        
    })
}

const sendEvent = (payload) => {
    const { event, parameter } = payload
    console.log('sendEvent ', event);

    return new Promise((res, rej) => {
        Dialogflow_V2.requestEvent(
            event,
            parameter,
            // result=>{console.log(result);},
            // error=>{console.log(error);}            
            result => { res({result}) },
            error => { rej({error}) }
        )        
    })    
}

export { setDialogflow, sendRequest, sendEvent }