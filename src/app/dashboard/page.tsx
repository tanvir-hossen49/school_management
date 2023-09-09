'use client';
import axios from "axios";
import { Button } from "@mui/material";
import {useRouter} from 'next/navigation'
import { useState } from "react";

export default function Dashboard () {
    const router = useRouter();
    const [disabled, setDisabled] = useState(false)

    const handleSignOut = async () => {
        try{
          setDisabled(true)
          const {data} = await axios.get('/api/users/logout');
        
          if(data.success) {
            router.push('/login')
          }
        } catch(error:any){
            console.log(error);
        } finally{
            setDisabled(false)
        }
    }

    return (
        <div>
            <Button
             variant="contained"
             style={{backgroundColor: '#1565c0'}}
             sx={{ mt: 3, mb: 2 }}
             onClick={handleSignOut}
             disabled={disabled}
            >
                Sign Out
            </Button>
        </div>
    )
}