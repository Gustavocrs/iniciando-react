type TweetProps = {
    text: string;
}


export function Tweet(props: TweetProps) {
  return (
    <div>
      <h1>
          {props.text}
      </h1>
    </div>
  );
}
