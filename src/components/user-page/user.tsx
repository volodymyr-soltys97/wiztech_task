'use client'
import User from "@/components/users/User";
import api from "@/services/api";
import { useEffect, useState } from "react"

const UserPageLayout = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const userId = sessionStorage.getItem('userId')

    const fetchUser = async (id: string) => {
      try {
        const response = await api.get(`users/${id}`);
        setUser(response.data.data)
      } catch (error) {

      }
    }

    if (userId) fetchUser(userId)
  }, []);

  console.log(user)

  return (
    <>
      <h2>User page</h2>
      {/* {user && <User user={user.data} isUserPage/>} */}
    </>
  )
}

export default UserPageLayout;