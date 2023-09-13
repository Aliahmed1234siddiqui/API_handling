import React from 'react'

import { BrowserRouter as Routers , Routes ,Route } from 'react-router-dom'
import Post from '../PAGES/Post'
import SinglePost from '../PAGES/singlePost'
import AddPost from '../PAGES/AddPost'

export default function Router() {
  return (
    <div>
      <Routers>
        <Routes>
            <Route path='/' element={<Post />}></Route>
            <Route path='singlePost/:id' element={<SinglePost/>}></Route>
            <Route path='AddPost' element={<AddPost/>}></Route>
            <Route path='AddPost/:id' element={<AddPost/>}></Route>

        </Routes>
      </Routers>
    </div>
  )
}
