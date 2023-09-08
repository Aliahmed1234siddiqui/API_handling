import React from 'react'

import { BrowserRouter as Routers , Routes ,Route } from 'react-router-dom'
import Post from '../PAGES/Post'
import SinglePost from '../PAGES/singlePost'

export default function Router() {
  return (
    <div>
      <Routers>
        <Routes>
            <Route path='/' element={<Post />}></Route>
            <Route path='singlePost/:id' element={<SinglePost/>}></Route>

        </Routes>
      </Routers>
    </div>
  )
}
