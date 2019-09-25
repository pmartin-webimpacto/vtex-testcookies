interface AnalyticsConfig{
    trackingId: string
    appToken: string
    appKey: string,
    domain: string,
    debug: boolean
    
}

interface AppSettings {
    account: string,
    idToken: string | undefined
    authToken: string,
    tid: string,
    appToken: string,
    appKey: string,
    version: number // ANalytics Protocol Version,
    debug: boolean,
    domain: string
}

interface GAOrder {
    /*tid: string,
    v: number,*/
    cid: string,
    uip: string,
    cu: string,
    ti: string,
    tr: number,
    ts: number,
    tt: number,
    items: [GAItem],
    cs?: string,
    cm?: string
}

interface GAItem {
    prid: string
    prnm: string
    prbr: string 
    prca: string
    prva: string 
    prpr: number
    prqt: number
    [key: string]: string|number;
}

interface feedOrder {
    eventId: string
    handle: string
    domain: string
    state: string
    orderId: string
}