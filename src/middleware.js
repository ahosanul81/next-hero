import { NextResponse } from "next/server"

const user = true;

export const middleware = (request) => {
    if(!user){
        return NextResponse.redirect(new URL('/about', request.url))
    }
    return NextResponse.next()
}
export const config = {
    matcher: '/blogs',
}