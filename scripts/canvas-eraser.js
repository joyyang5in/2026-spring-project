/**
 * An eraser for a Canvas element when drawing in 2D.
 */
class CanvasEraser {
  /**
   * The 2D context of a Canvas element.
   *
   * @type CanvasRenderingContext2D
   */
  surface;

  /**
   * Create an eraser for a 2D context object.
   *
   * @param {CanvasRenderingContext2D} canvasSurface2D
   */
  constructor(canvasSurface2D) {
    this.surface = canvasSurface2D;
  }

  /**
   * Erases a circle of the given radius at the given coordinates.
   *
   * @param {number} x The X coordinate of the circle’s center
   * @param {number} y The Y coordinate of the circle’s center
   * @param {number} radius The radius of the circle
   */
  circle(x, y, radius) {
    // Save so we can revert the clipping path.
    this.surface.save();

    // Create a circular clipping path.
    this.surface.beginPath();
    this.surface.arc(x, y, radius, 0, 2 * Math.PI);
    this.surface.clip();

    // Clear the area around the circle.
    this.surface.clearRect(x - radius, y - radius, radius * 2, radius * 2);

    // Remove the clipping path.
    this.surface.restore();
  }
}

export { canvasEraser };
