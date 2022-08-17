

const API = "AIzaSyBtyt2_nmfrHtnbsZVrE57FtVHaBP2IGoA";

const searchVideo = async() => {
    try{
        const q = document.getElementById("query").value

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`)

        const data = await res.json()
        console.log(data.items);
        append(data.items)
    }catch(err)
    {
        console.log(err)
    }
}

const append =(videos) => {

    let show_videos = document.getElementById("show_videos")
    show_videos.innerText=null

    videos.forEach(({id : {videoId} , snippet : {title}}) => {

        let div = document.createElement("div");
        div.setAttribute("id","box")

        let iframe = document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.width="100%"
        iframe.height="100%"
        iframe.allow="fullscreen"

        let name = document.createElement("h5")
        name.innerText=title

        div.append(iframe,name)

        let data = {
             title,
             videoId,
        }

        div.onclick = () =>{
            showVideo(data)
        }
        show_videos.append(div)
    })
    }

    const showVideo=(x)=>{
       window.location.href="video.html"
        localStorage.setItem("video",JSON.stringify(x))
    }


const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=trending%202&key=AIzaSyBtyt2_nmfrHtnbsZVrE57FtVHaBP2IGoA"

fetch(url)
.then((res)=>{
    return res.json()
})
.then ((res)=>{
    console.log(res.items)
    appendVideo(res.items)
})
.catch((res)=>{
    console.log(err)
})

const appendVideo =(videos) => {

    let show_videos = document.getElementById("show_videos")

    videos.forEach(({id : {videoId} , snippet : {title}}) => {

        let box = document.createElement("div");
        box.setAttribute("id","box")

        let iframe = document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.width="100%"
        iframe.height="100%"
        iframe.allow="fullscreen"

        let name = document.createElement("h5")
        name.innerText=title

        box.append(iframe,name)

        show_videos.append(box)
    })
    }

