import React from 'react'
import { getPostsList } from '../../lib/posts'
import PostsList from '../../components/postsList'

const Posts = ({postsList}) => {
  return postsList.posts.map((post,index) => {
    return <PostsList {...{post}} key={index}/>
  })
}

export const getServerSideProps = async (context) => {
  const postsList = await getPostsList()
  return {
    props: {
      postsList
    }
  }
}

export default Posts