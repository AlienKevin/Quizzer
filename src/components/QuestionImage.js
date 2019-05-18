import React from "react";
import { CardMedia } from "material-ui";
import { withStyles } from "material-ui/styles";

const styles = {
  media: {
    height: 300
  }
};

function QuestionImage({ imageUrl, classes }) {
  return <CardMedia className={classes.media} image={imageUrl} />;
}

export default withStyles(styles)(QuestionImage);
