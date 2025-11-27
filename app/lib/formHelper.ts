const getString = (form: FormData, key: string): string => {
    const value = form.get(key);

    if(typeof value !== "string"){
        throw new Error(`Missing or invalid field: ${key}`)
    }

    return value;
}



export default getString;