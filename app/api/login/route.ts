import { NextRequest, NextResponse } from "next/server";
import { runQuery } from "@/app/lib/db";
import bcrypt from "bcryptjs"
import getString from "@/app/lib/formHelper";

type UserFormLogin = {
    idNo: string;
    password: string;
}

export async function POST(req: NextRequest){
    const formData = await req.formData();

    const data: UserFormLogin = {
        idNo: getString(formData, "idNo"),
        password: getString(formData, "password")
    }

    try {
        const check = runQuery(
            "SELECT * FROM users WHERE idNo = ?",
            [data.idNo]
        )

        if(check.length === 0){
            return NextResponse.json(
                { success: false, message: "User not found!"},
                { status: 404 }
            )
        }

        const user = check[0] as UserFormLogin;
        
        const checkPassword: boolean = await bcrypt.compare(data.password, user.password);

        if(!checkPassword){
            return NextResponse.json(
                { success: false, "message": "Invalid password!"},
                { status: 401 }
            )
        }

        return NextResponse.json({ success: true, message: "User registered!"}, { status: 201})
    } catch(err){
        return NextResponse.json({ error: (err as Error).message}, { status: 500})
    }

}
