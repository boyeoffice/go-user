import React from 'react'
import Grid from '@material-ui/core/Grid'
import { getAllUsers } from '../../lib/users'
import UserCard from '../../components/card'
import Head from 'next/head'

const Users = ({allUsers}) => {
  return (
    <>
    <Head>
    <title>Next Users</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Grid container spacing={5} justify="space-evenly">
      {allUsers.users.map(({id, firstName, lastName, email, image}) => (
        <Grid item xs={6} lg={2} md={4} key={id}>
          <UserCard {...{name: `${firstName,' ',lastName}`, id, email, image}}/>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export const getStaticProps = async () => {
  const allUsers = await getAllUsers()
  return {
    props: {
      allUsers
    }
  }
}

export default Users