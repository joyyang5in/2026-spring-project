/**
 * Makes an image that can be positioned within its container.
 */
class StickyClickyImage {
  /**
   * The id attribute of the image
   *
   * @type {string}
   */
  #imageID;

  /**
   * The id attribute of the HTML element allowed to contain the moving image
   *
   * @type {string}
   */
  #containerID;

  /**
   * Create a sticky image that you can move after clicking.
   *
   * @param {string} imageID
   */
  constructor(imageID) {
    this.#imageID = imageID;

    // Check if the image exists.
    if (!document.getElementById(imageID)) {
      throw Error(`An image with id "${imageID}" was not found.`);
    }
  }

  /**
   * Sets the container using its ID.
   *
   * @param {string} containerID
   */
  setContainerID(containerID) {
    // Don't allow the container to be changed.
    if (this.#containerID) {
      throw Error("Container ID already set");
    }

    // Check if the container exists.
    if (!document.getElementById(containerID)) {
      throw Error(`A container with id "${containerID}" was not found.`);
    }

    // Store the container ID.
    this.#containerID = containerID;

    // Prepare the image and container.
    this.#prepare();
  }

  /**
   * Prepares the image to be ready to be clicked.
   */
  #prepare() {
    // Make references to the IDs to prevent memory leaks in event handlers.
    const containerID = this.#containerID;
    const imageID = this.#imageID;

    const container = document.getElementById(containerID);
    const image = document.getElementById(imageID);
    const span = document.createElement("span");

    // Set the container styles.
    container.style.position = "relative";
    container.style.padding = "0";

    // Set the image-replacement span.
    image.after(span);
    span.style.width = image.width + "px";
    span.style.height = image.height + "px";

    // Set the image styles.
    image.style.top = image.offsetTop + "px";
    image.style.left = image.offsetLeft + "px";
    image.style.zIndex = "100";

    // Quickly position the span where the image was positioned.
    image.style.position = "absolute";
    span.style.display = "block";

    /**
     * The "mousemove" event handler
     *
     * @param {MouseEvent} event
     */
    function mouseMoveHandler(event) {
      // Find the left/top viewport coordinates of the container.
      const { left, top } = document
        .getElementById(containerID)
        .getBoundingClientRect();

      const image = document.getElementById(imageID);

      // Calculate the coordinates of the mouse event relative to the
      // container. Also remove the image's original click offset.
      image.style.left = event.x - left - imageOffset.x + "px";
      image.style.top = event.y - top - imageOffset.y + "px";
    }

    // Store the spot where the image was clicked.
    const imageOffset = {
      x: 0,
      y: 0,
    };

    // Add a click handler on the image.
    let isMoving = false;
    image.addEventListener("click", (event) => {
      const container = document.getElementById(containerID);

      if (!isMoving) {
        // Calculate the spot where the image was clicked.
        const { left, top } = document
          .getElementById(imageID)
          .getBoundingClientRect();
        imageOffset.x = event.x - left;
        imageOffset.y = event.y - top;

        // Start moving the image.
        container.addEventListener("mousemove", mouseMoveHandler);
      } else {
        // Stop moving the image.
        container.removeEventListener("mousemove", mouseMoveHandler);
      }
      isMoving = !isMoving;
    });
  }
}

export { StickyClickyImage };
