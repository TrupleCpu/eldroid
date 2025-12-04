
import { NextRequest, NextResponse } from "next/server";
import { runQuery } from "@/app/lib/db";
import getString from "@/app/lib/formHelper";

type UserForm = {
    idNo: string;
    lastName: string;
    firstName: string;
    course: string;
    level: string;
}

export async function POST(req: NextRequest){
    const formData = await req.formData();

    const data: UserForm = {
        idNo: getString(formData, "idNo"),
        lastName: getString(formData, "lastName"),
        firstName: getString(formData, "firstName"),
        course: getString(formData, "course"),
        level: getString(formData, "level")
    }

    try {
        const check = await runQuery(
            "SELECT * FROM users WHERE idNo = ?",
            [data.idNo]
        )

        if(check.length > 0)
            return NextResponse.json({ success: false, message: "Account already exist!"}, { status: 401 })

        await runQuery(
            "INSERT INTO users (idno, lastname, firstname, course, level) VALUES (?, ?, ?, ?, ?)",
            [data.idNo, data.lastName, data.firstName, data.course, data.level]
        )

        return NextResponse.json({ success: true, message: "User added!"}, { status: 200})
    } catch(err){
        return NextResponse.json({ error: (err as Error).message}, { status: 500})
    }
}

export async function GET(){

  try {
      const users = await runQuery(
        "SELECT * FROM users"
    )

    return NextResponse.json({ users }, { status: 200 })
  } catch(err) {
     return NextResponse.json( { error: (err as Error).message}, {status: 500} )
  }
}


export async function PUT(req: NextRequest){
   const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    
    try {
        const body = await req.json();

        const { idNo, firstName, lastName, course, level,  } = body;

        await runQuery("UPDATE users SET idNo = ?, firstname = ?, lastname = ?, course = ?, level = ? WHERE id = ? ", [ idNo, firstName, lastName, course, level, id])

      
        return NextResponse.json({ success: true, message: "Updated successfully" });
        
    } catch(error) {
        
        return NextResponse.json({ error: "Update failed"}, { status: 500 })
    }
}

export async function DELETE(req: NextRequest){
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    try {
            await runQuery("DELETE FROM users WHERE id = ?", [id]);

         return NextResponse.json({ success: true, message: "User deleted successfully" }, { status: 200 });

    } catch(err) {
        return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
}

