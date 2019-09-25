import { Service, ServiceContext, IOClients } from '@vtex/api'
//import * as parse from 'co-body'
import { getCookie } from './handlers/index';

declare global {
    // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
    type Context = ServiceContext<IOClients, State>

    // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
    interface State {
        code: number
    }
}

export default new Service({
    routes: {
        getCookie
    }
    
})