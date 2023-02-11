import Tweet from "./Tweet";

function ListaTweet({ listaTweets }) {
  return (
    <div>
      {listaTweets.map((item) => (
        <Tweet tweet={item} key={item.id} />
      ))}
    </div>
  );
}

export default ListaTweet;
