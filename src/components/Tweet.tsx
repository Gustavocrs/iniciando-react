import "./Tweet.css";

type TweetProps = {
  text: string;
};

export function Tweet(props: TweetProps) {
  return (
    <div>
      <p className="tweetPadrao">{props.text}</p>
    </div>
  );
}
