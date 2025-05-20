import { type StateSchema } from 'app/providers/Store'
import { type Room } from 'entities/Room'

export const getRoomData = (state: StateSchema) => state.room?.data

export const getRoomGroup = (state: StateSchema) => {
    return state.room?.data?.reduce<Record<string, Room[]>>((acc, room) => {
        if (+room.number >= 100 && +room.number < 200) {
            if (!acc['100']) {
                acc['100'] = []
            }

            acc['100'].push(room)
        }

        if (+room.number >= 200 && +room.number < 300) {
            if (!acc['200']) {
                acc['200'] = []
            }

            acc['200'].push(room)
        }

        if (+room.number >= 300 && +room.number < 400) {
            if (!acc['300']) {
                acc['300'] = []
            }

            acc['300'].push(room)
        }

        if (+room.number >= 400 && +room.number < 500) {
            if (!acc['400']) {
                acc['400'] = []
            }

            acc['400'].push(room)
        }

        if (+room.number >= 500 && +room.number < 600) {
            if (!acc['500']) {
                acc['500'] = []
            }

            acc['500'].push(room)
        }

        return acc
    }, {})
}
