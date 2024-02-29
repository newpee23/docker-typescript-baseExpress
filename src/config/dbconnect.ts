import mysql from "mysql2/promise";

// export let dbConnection: Pool | null = null;

export const getDbConnection = (): mysql.Pool => {
    try {
        const connection = mysql.createPool({
            host: "mysql",
            user: "root",
            password: "root1234",
            database: "dockerExample1",
        });
        // console.log("Connected to MySQL database!");
        return connection;
    } catch (error) {
        console.error("Error connecting to MySQL:", error);
        throw error;
    }
};