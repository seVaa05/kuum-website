function getYoutubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/)
  return match?.[1]
}

export function YouTubeEmbed({ url, title }: { url: string; title: string }) {
  const id = getYoutubeId(url)

  if (!id) {
    return <a className="button button--outline" href={url}>Otvori video</a>
  }

  return (
    <div className="video-frame">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
