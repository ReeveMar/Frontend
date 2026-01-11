import {createContext, useContext, useEffect, useState} from "react";

const AuthContext= createContext(null);

export function AuthProvider({children}){
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        async function loadUser(){
            try{
                const response= await fetch("http://127.0.0.1:8000/core/users/me/",{method:"GET",
                    credentials: "include"
                });
                if (response.ok){
                    print("User is authenticated");
                    const data= await response.json();
                    setUser(data);
                }

            }finally{
                setLoading(false);
            }
        }
        loadUser();
    },[]);

    function logout(){
        fetch("http://127.0.0.1:8000/core/logout/",{method:"POST",
            credentials: "include"
        }).then(()=>{
            setUser(null);
        });
    }
    return(
        <AuthContext.Provider value={{user,loading,logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth(){
    return useContext(AuthContext);

}