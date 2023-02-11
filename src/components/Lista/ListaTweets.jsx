import Tweet from "./Tweet";

function ListaTweet({ listaTweets, MarcarFavorito }) {
  return (
    <div>
      {listaTweets.map((item) => (
        <Tweet key={item.id} tweet={item} MarcarFavorito={MarcarFavorito} />
      ))}
    </div>
  );
}

export default ListaTweet;
