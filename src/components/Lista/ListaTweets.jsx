import Tweet from "./Tweet";

function ListaTweet({ listaTweets, MarcarFavorito, EliminarTweet }) {
  return (
    <div>
      {listaTweets.map((item) => (
        <Tweet
          key={item.id}
          tweet={item}
          MarcarFavorito={MarcarFavorito}
          EliminarTweet={EliminarTweet}
        />
      ))}
    </div>
  );
}

export default ListaTweet;
