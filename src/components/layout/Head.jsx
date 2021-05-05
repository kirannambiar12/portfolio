import React from 'react'
import MetaTags from "react-meta-tags";

const Layout = ({
    description,
    title,
    image,
    url
}) => {
    return (
        <MetaTags>
          <meta name="author" content="Kiran Nambiar" />
        <meta name="description" content={`${description ? description : "Kiran Nambiar | I am a full stack developer. I build websites. I can work on both frontend and backend. I use latest technologies and frameworks like React, Django, Wagtail and much more."}`} />
        <meta name="keywords" content="full stack, developer, websites, kiran, nambiar, kiran nambiar, frontend, backend, reactjs, django, wagtail, docker, apps, mobile, responsive" />
        <meta property="og:site_name" content="Kiran Nambiar | Full stack developer." />
        <meta property="title" content={`${title ? title : "Kiran Nambiar | Full stack developer."}`} />
        <meta property="og:title" content={`${title ? title : "Kiran Nambiar | Full stack developer."}`} />
        <meta property="og:description" content={`${description ? description : "Kiran Nambiar | I am a full stack developer. I build websites. I can work on both frontend and backend. I use latest technologies and frameworks like React, Django, Wagtail and much more."}`} />
        <meta property="og:image" content={`${image ? image : "http://www.kirannambiar.in/klogo.png"}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`http://www.kirannambiar.in/${url}`} />
      </MetaTags>
    )
}

export default Layout;
