
if (typeof gdjs.evtsExt__CurvedMovement__DefineHelperClasses !== "undefined") {
  gdjs.evtsExt__CurvedMovement__DefineHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CurvedMovement__DefineHelperClasses = {};
gdjs.evtsExt__CurvedMovement__DefineHelperClasses.idToCallbackMap = new Map();


gdjs.evtsExt__CurvedMovement__DefineHelperClasses.userFunc0x818590 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/**
 * @param {number[]} array 
 * @param {number} value
 */
const findLowerIndex = function (array, value) {
  let low = 0;
  let high = array.length - 1;
  let index = 0;
  while (low < high) {
    index = low + (((high - low) / 2) | 0);
    if (array[index] < value) {
      low = index + 1;
    } else {
      high = index;
    }
  }
  if (array[index] > value) {
    index--;
  }
  return index;
};

const CurvedPath = /** @class */ (function () {
  /**
   * @param {number} speedScaleY Set it to 0.5 for pixel isometry.
   */
  function CurvedPath(speedScaleY = 1) {
    /**
     * @type {CubicBezierCurve[]}
     */
    this.curves = [];
    /**
     * @type {number[]}
     */
    this.curvePreviousLengths = [0];
    /**
     * Set it to 0.5 for pixel isometry.
     */
    this.speedScaleY = speedScaleY;
  };

  CurvedPath.prototype.getCurvePreviousLengths = function () {
    if (this.curvePreviousLengths.length === 0) {
      let lengthSum = 0;
      this.curvePreviousLengths.push(0);
      for (const curve of this.curves) {
        lengthSum += curve.getLength();
        this.curvePreviousLengths.push(lengthSum);
      }
    }
    return this.curvePreviousLengths;
  }

  CurvedPath.prototype.clone = function () {
    const clone = new CurvedPath();
    clone.curves = this.curves.map(curve => curve.clone());
    clone.curvePreviousLengths = [...this.curvePreviousLengths];
    return clone;
  };

  CurvedPath.prototype.getSpeedScaleY = function () {
    return this.speedScaleY;
  };

  /**
   * @param {number} speedScaleY Set it to 0.5 for pixel isometry.
   */
  CurvedPath.prototype.setSpeedScaleY = function (speedScaleY) {
    if (this.speedScaleY === speedScaleY) {
      return;
    }
    this.scale(1, this.speedScaleY / speedScaleY);
    this.speedScaleY = speedScaleY;
  };

  /**
   * @param {CubicBezierCurve} curve
   */
  CurvedPath.prototype._add = function (curve) {
    this.curves.push(curve);
    if (this.curvePreviousLengths.length > 0) {
      this.curvePreviousLengths.push(this.getLength() + curve.getLength());
    }
  };

  /**
   * @param {number} firstControlX
   * @param {number} firstControlY
   * @param {number} secondControlX
   * @param {number} secondControlY
   * @param {number} destinationX
   * @param {number} destinationY
   * @param {boolean} isRelative
   */
  CurvedPath.prototype.addCurve = function (
    firstControlX,
    firstControlY,
    secondControlX,
    secondControlY,
    destinationX,
    destinationY,
    isRelative) {
    const endX = this.getEndX();
    const endY = this.getEndY();
    if (isRelative) {
      firstControlX += endX;
      firstControlY += endY;
      secondControlX += endX;
      secondControlY += endY;
      destinationX += endX;
      destinationY += endY;
    }
    this._add(new CubicBezierCurve(
      endX,
      endY / this.speedScaleY,
      firstControlX,
      firstControlY / this.speedScaleY,
      secondControlX,
      secondControlY / this.speedScaleY,
      destinationX,
      destinationY / this.speedScaleY
    ));
  }

  /**
   * @param {number} secondControlX
   * @param {number} secondControlY
   * @param {number} destinationX
   * @param {number} destinationY
   * @param {boolean} isRelative
   */
  CurvedPath.prototype.addSmoothCurve = function (
    secondControlX,
    secondControlY,
    destinationX,
    destinationY,
    isRelative) {
    const endX = this.getEndX();
    const endY = this.getEndY();
    if (isRelative) {
      secondControlX += endX;
      secondControlY += endY;
      destinationX += endX;
      destinationY += endY;
    }
    const lastControlX = this.getLastControlX();
    const lastControlY = this.getLastControlY();
    let firstControlX = 2 * endX - lastControlX;
    let firstControlY = 2 * endY - lastControlY;

    this._add(new CubicBezierCurve(
      endX,
      endY / this.speedScaleY,
      firstControlX,
      firstControlY / this.speedScaleY,
      secondControlX,
      secondControlY / this.speedScaleY,
      destinationX,
      destinationY / this.speedScaleY
    ));
  }


  /**
   * @param {number} destinationX
   * @param {number} destinationY
   * @param {boolean} isRelative
   */
  CurvedPath.prototype.addLine = function (
    destinationX,
    destinationY,
    isRelative) {
    const endX = this.getEndX();
    const endY = this.getEndY();
    if (isRelative) {
      destinationX += endX;
      destinationY += endY;
    }
    const lengthX = destinationX - endX;
    const lengthY = destinationY - endY;

    // TODO Optimize it with an object dedicated to lines.
    this._add(new CubicBezierCurve(
      endX,
      endY / this.speedScaleY,
      endX + lengthX / 3,
      (endY + lengthY / 3) / this.speedScaleY,
      endX + lengthX * 2 / 3,
      (endY + lengthY * 2 / 3) / this.speedScaleY,
      destinationX,
      destinationY / this.speedScaleY
    ));
  }

  CurvedPath.prototype.close = function () {
    if (this.curves.length === 0) {
      return;
    }
    const firstCurve = this.curves[0];
    this.addLine(firstCurve.getOriginX(), firstCurve.getOriginY(), false);
  }

  /**
   * @param {CurvedPath} path
   */
  CurvedPath.prototype.append = function (path) {
    const endX = this.getEndX();
    const endY = this.getEndY();
    for (const curve of path.curves) {
      const clone = curve.clone();
      for (const point of clone.points) {
        point[0] += endX;
        point[1] *= path.speedScaleY / this.speedScaleY;
        point[1] += endY;
      }
      this._add(clone);
    }
  };

  /**
   * @param {CurvedPath} path
   * @param {boolean} shouldFlip
   */
  CurvedPath.prototype.appendRotatedPath = function (path, shouldFlip) {
    const startAngle = Math.atan2(path.curves[0].getFirstControlY(), path.curves[0].getFirstControlX());
    const rotatedPath = path.clone();
    rotatedPath.rotate(this.getEndAngle() - startAngle);
    if (shouldFlip) {
      rotatedPath.flip();
    }
    this.append(rotatedPath, false);
  };

  CurvedPath.prototype.clear = function () {
    this.curves.length = 0;
    this.curvePreviousLengths.length = 1;
    this.curvePreviousLengths[0] = 0;
  };

  CurvedPath.prototype.getLength = function () {
    const curvePreviousLengths = this.getCurvePreviousLengths();
    return curvePreviousLengths[curvePreviousLengths.length - 1];
  };

  CurvedPath.prototype.isClosed = function () {
    if (this.curves.length === 0) {
      return true;
    }
    const firstCurve = this.curves[0];
    const lastCurve = this.curves[this.curves.length - 1];
    return firstCurve.getOriginX() === lastCurve.getTargetX() &&
      firstCurve.getOriginY() === lastCurve.getTargetY();
  };

  /**
   * @param {number} length
   */
  CurvedPath.prototype.getCurveIndex = function (length) {
    const curvePreviousLengths = this.getCurvePreviousLengths();
    return Math.min(this.curves.length - 1, findLowerIndex(curvePreviousLengths, length));
  };

  /**
   * @param {number} length
   */
  CurvedPath.prototype.getX = function (length) {
    const curvePreviousLengths = this.getCurvePreviousLengths();
    if (length >= this.getLength()) {
      return this.getEndX();
    }
    const curveIndex = this.getCurveIndex(length);
    const curve = this.curves[curveIndex];
    const curveStartLength = curvePreviousLengths[curveIndex];
    const u = (length - curveStartLength) / curve.getLength();
    return curve.getX(u);
  };

  /**
   * @param {number} length
   */
  CurvedPath.prototype.getY = function (length) {
    const curvePreviousLengths = this.getCurvePreviousLengths();
    if (length >= this.getLength()) {
      return this.getEndY();
    }
    const curveIndex = this.getCurveIndex(length);
    const curve = this.curves[curveIndex];
    const curveStartLength = curvePreviousLengths[curveIndex];
    const u = (length - curveStartLength) / curve.getLength();
    return curve.getY(u) * this.speedScaleY;
  };

  const workingPoint = [0, 0];
  /**
   * @param {number} length
   * @param {gdjs.AffineTransformation} transformation
   * @param {[number, number]} transformation
   */
  CurvedPath.prototype.getTransformedPosition = function (length, transformation, result) {
    if (!result) {
      result = workingPoint;
    }
    const curvePreviousLengths = this.getCurvePreviousLengths();
    if (length >= this.getLength()) {
      result[0] = this.getEndX();
      result[1] = this.getEndY();
    }
    else {
      const curveIndex = this.getCurveIndex(length);
      const curve = this.curves[curveIndex];
      const curveStartLength = curvePreviousLengths[curveIndex];
      const u = (length - curveStartLength) / curve.getLength();
      result[0] = curve.getX(u);
      result[1] = curve.getY(u);
    }
    transformation.transform(result, result);
    result[1] *= this.speedScaleY;
    return result;
  };

  /**
   * @param {number} x
   * @param {number} y
   * @param {gdjs.AffineTransformation} transformation
   * @param {[number, number]} transformation
   */
  CurvedPath.prototype.transformPosition = function (x, y, transformation, result) {
    if (!result) {
      result = workingPoint;
    }
    result[0] = x;
    result[1] = y / this.speedScaleY;
    transformation.transform(result, result);
    result[1] *= this.speedScaleY;
    return result;
  };

  /**
   * @param {number} length
   */
  CurvedPath.prototype.getAngle = function (length) {
    const curvePreviousLengths = this.getCurvePreviousLengths();
    if (this.curves.length === 0) {
      return 0;
    }
    const curveIndex = this.getCurveIndex(length);
    const curve = this.curves[curveIndex];
    const curveStartLength = curvePreviousLengths[curveIndex];
    const u = (length - curveStartLength) / curve.getLength();
    return curve.getAngle(u);
  };

  CurvedPath.prototype.getOriginX = function (curveIndex) {
    return this.curves.length === 0 ? 0 : this.curves[curveIndex].getOriginX();
  };

  CurvedPath.prototype.getOriginY = function (curveIndex) {
    return this.curves.length === 0 ? 0 : this.curves[curveIndex].getOriginY() * this.speedScaleY;
  };

  CurvedPath.prototype.getFirstControlX = function (curveIndex) {
    return this.curves.length === 0 ? 0 : this.curves[curveIndex].getFirstControlX();
  };

  CurvedPath.prototype.getFirstControlY = function (curveIndex) {
    return this.curves.length === 0 ? 0 : this.curves[curveIndex].getFirstControlY() * this.speedScaleY;
  };

  CurvedPath.prototype.getSecondControlX = function (curveIndex) {
    return this.curves.length === 0 ? 0 : this.curves[curveIndex].getSecondControlX();
  };

  CurvedPath.prototype.getSecondControlY = function (curveIndex) {
    return this.curves.length === 0 ? 0 : this.curves[curveIndex].getSecondControlY() * this.speedScaleY;
  };

  CurvedPath.prototype.getTargetX = function (curveIndex) {
    return this.curves.length === 0 ? 0 : this.curves[curveIndex].getTargetX();
  };

  CurvedPath.prototype.getTargetY = function (curveIndex) {
    return this.curves.length === 0 ? 0 : this.curves[curveIndex].getTargetY() * this.speedScaleY;
  };

  CurvedPath.prototype.getLastControlX = function () {
    return this.getSecondControlX(this.curves.length - 1);
  };

  CurvedPath.prototype.getLastControlY = function () {
    return this.getSecondControlY(this.curves.length - 1);
  };

  CurvedPath.prototype.getEndX = function () {
    return this.getTargetX(this.curves.length - 1);
  };

  CurvedPath.prototype.getEndY = function () {
    return this.getTargetY(this.curves.length - 1);
  };

  CurvedPath.prototype.getEndAngle = function () {
    if (this.curves.length === 0) {
      return 0;
    }
    const lastCurve = this.curves[this.curves.length - 1];
    return Math.atan2(
      lastCurve.getTargetY() - lastCurve.getSecondControlY(),
      lastCurve.getTargetX() - lastCurve.getSecondControlX());
  };

  /**
   * @param {number} translationX
   * @param {number} translationY
   */
  CurvedPath.prototype.translate = function (translationX, translationY) {
    for (const curve of this.curves) {
      for (const point of curve.points) {
        point[0] += translationX;
        point[1] += translationY / this.speedScaleY;
      }
    }
  };

  /**
   * @param {number} scaleX
   * @param {number} scaleY
   */
  CurvedPath.prototype.scale = function (scaleX, scaleY) {
    for (const curve of this.curves) {
      for (const point of curve.points) {
        point[0] *= scaleX;
        point[1] *= scaleY;
      }
      curve.arcLengths.length = 0;
    }
    this.curvePreviousLengths.length = 0;
  };

  /**
   * @param {number} angle
   */
  CurvedPath.prototype.rotate = function (angle) {
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);

    // Avoid rounding errors around 0.
    if (cos === -1 || cos === 1) {
      sin = 0;
    }
    if (sin === -1 || sin === 1) {
      cos = 0;
    }
    
    for (const curve of this.curves) {
      for (const point of curve.points) {
        const x = point[0];
        const y = point[1];
        point[0] = x * cos - y * sin;
        point[1] = x * sin + y * cos;
      }
      curve.arcLengths.length = 0;
    }
    this.curvePreviousLengths.length = 0;
  };

  CurvedPath.prototype.invert = function () {
    const endX = this.getEndX();
    const endY = this.getEndY();
    for (const curve of this.curves) {
      for (const point of curve.points) {
        point[0] = point[0] - endX;
        point[1] = point[1] - endY;
      }
      curve.points.reverse();
      curve.arcLengths.length = 0;
    }
    this.curves.reverse();
    this.curvePreviousLengths.length = 0;
  };

  /**
   * Do a symetry around the first control vector.
   */
  CurvedPath.prototype.flip = function () {
    const axisX = this.curves[0].getFirstControlX();
    const axisY = this.curves[0].getFirstControlY();
    const axisLength = Math.hypot(axisX, axisY);
    const ux = axisX / axisLength;
    const uy = axisY / axisLength;

    const sx = 2 * ux * ux - 1;
    const sy = 2 * uy * uy - 1;
    const rx = 2 * uy * ux;
    const ry = rx;

    for (const curve of this.curves) {
      for (const point of curve.points) {
        const x = point[0];
        const y = point[1];
        point[0] = x * sx + y * rx;
        point[1] = x * ry + y * sy;
      }
      curve.arcLengths.length = 0;
    }
    this.curvePreviousLengths.length = 0;
  };

  return CurvedPath;
})();

/**
 * @param {number} t
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 */
const interpolateCubicCurve = function (t, a, b, c, d) {
  return (
    (1 - t) ** 3 * a +
    3 * (1 - t) ** 2 * t * b +
    3 * (1 - t) * t ** 2 * c +
    t ** 3 * d
  );
};
/**
 * @param {number} t
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 */
const interpolateCubicCurveDirection = function (t, a, b, c, d) {
  return (
    3 * (1 - t) ** 2 * (b - a) +
    6 * (1 - t) * t * (c - b) +
    3 * t ** 2 * (d - c)
  );
};


const CubicBezierCurve = /** @class */ (function () {
  /**
   * @param {number} aX
   * @param {number} aY
   * @param {number} bX
   * @param {number} bY
   * @param {number} cX
   * @param {number} cY
   * @param {number} dX
   * @param {number} dY
   */
  function CubicBezierCurve(aX, aY, bX, bY, cX, cY, dX, dY) {
    /** @type {[FloatPoint, FloatPoint, FloatPoint, FloatPoint]} */
    this.points = [[aX, aY], [bX, bY], [cX, cY], [dX, dY]];

    /** @type {number[]} */
    this.arcLengths = [];
  };

  CubicBezierCurve.prototype.clone = function () {
    const clone = new CubicBezierCurve();
    clone.points = this.points.map(point => [...point]);
    clone.arcLengths = [...this.arcLengths];
    clone.speedScaleY = this.speedScaleY;
    return clone;
  }

  CubicBezierCurve.prototype.getArcLengths = function () {
    if (this.arcLengths.length === 0) {
      const segmentsCount = 100;
      this.arcLengths.length = segmentsCount + 1;
      this.arcLengths[0] = 0;

      const aX = this.points[0][0];
      const aY = this.points[0][1];
      const bX = this.points[1][0];
      const bY = this.points[1][1];
      const cX = this.points[2][0];
      const cY = this.points[2][1];
      const dX = this.points[3][0];
      const dY = this.points[3][1];

      let oldX = aX;
      let oldY = aY;
      let currentLength = 0;
      for (let i = 1; i <= segmentsCount; i += 1) {
        const x = interpolateCubicCurve(i * 0.01, aX, bX, cX, dX);
        const y = interpolateCubicCurve(i * 0.01, aY, bY, cY, dY);
        currentLength += Math.hypot(x - oldX, y - oldY);
        this.arcLengths[i] = currentLength;
        oldX = x;
        oldY = y;
      }
    }
    return this.arcLengths;
  };

  /**
   * @param {number} u
   */
  CubicBezierCurve.prototype.reparametrizeByArcLength = function (u) {
    const arcLengths = this.getArcLengths();
    const segmentsCount = arcLengths.length - 1;
    const targetLength = u * arcLengths[segmentsCount];
    const index = findLowerIndex(arcLengths, targetLength);

    const lengthBefore = arcLengths[index];
    if (lengthBefore === targetLength) {
      return index / segmentsCount;
    } else {
      return (
        (index +
          (targetLength - lengthBefore) /
          (arcLengths[index + 1] - lengthBefore)) /
        segmentsCount
      );
    }
  };

  /**
   * @param {number} u
   */
  CubicBezierCurve.prototype.getX = function (u) {
    return interpolateCubicCurve(
      this.reparametrizeByArcLength(u),
      this.points[0][0],
      this.points[1][0],
      this.points[2][0],
      this.points[3][0]
    );
  };

  /**
   * @param {number} u
   */
  CubicBezierCurve.prototype.getY = function (u) {
    return interpolateCubicCurve(
      this.reparametrizeByArcLength(u),
      this.points[0][1],
      this.points[1][1],
      this.points[2][1],
      this.points[3][1]
    );
  };

  /**
   * @param {number} u
   */
  CubicBezierCurve.prototype.getAngle = function (u) {
    const t = this.reparametrizeByArcLength(u);
    const directionX = interpolateCubicCurveDirection(
      t,
      this.points[0][0],
      this.points[1][0],
      this.points[2][0],
      this.points[3][0]
    );
    const directionY = interpolateCubicCurveDirection(
      t,
      this.points[0][1],
      this.points[1][1],
      this.points[2][1],
      this.points[3][1]
    );
    return Math.atan2(directionY, directionX);
  };

  CubicBezierCurve.prototype.getLength = function () {
    const arcLengths = this.getArcLengths();
    return arcLengths[arcLengths.length - 1];
  };

  CubicBezierCurve.prototype.getOriginX = function () {
    return this.points[0][0];
  };

  CubicBezierCurve.prototype.getOriginY = function () {
    return this.points[0][1];
  };

  CubicBezierCurve.prototype.getFirstControlX = function () {
    return this.points[1][0];
  };

  CubicBezierCurve.prototype.getFirstControlY = function () {
    return this.points[1][1];
  };

  CubicBezierCurve.prototype.getSecondControlX = function () {
    return this.points[2][0];
  };

  CubicBezierCurve.prototype.getSecondControlY = function () {
    return this.points[2][1];
  };

  CubicBezierCurve.prototype.getTargetX = function () {
    return this.points[3][0];
  };

  CubicBezierCurve.prototype.getTargetY = function () {
    return this.points[3][1];
  };

  return CubicBezierCurve;
})();

const pathRegex = /[CcSsLlMmHhVvZz]|(?:-?\d+(?:\.\d+)?(?:e-?\d+)?)/g;
const svgActions = ["c", "s", "l", "m", "v", "h", "z"];

/**
 * @param {string} svgComandsString
 */
CurvedPath.parsePath = function (svgComandsString) {
  const regExpResults = svgComandsString.match(pathRegex);
  if (!regExpResults) {
    return null;
  }
  const path = new CurvedPath();
  let currentAction = "";
  let isRelative = false;
  let originX = 0;
  let originY = 0;
  for (let index = 0; index < regExpResults.length; index++) {
    const regExpResult = regExpResults[index];
    if (regExpResult.length === 1) {
      const lowerCaseRegExpResult = regExpResult.toLowerCase();
      if (svgActions.indexOf(lowerCaseRegExpResult) >= 0) {
        currentAction = lowerCaseRegExpResult;
        isRelative = lowerCaseRegExpResult === regExpResult;
        index++;
      }
    }
    switch (currentAction) {
      case "c":
        {
          if (regExpResults.length < index + 5) {
            break;
          }
          const firstControlX = Number.parseFloat(regExpResults[index + 0]);
          const firstControlY = Number.parseFloat(regExpResults[index + 1]);
          const secondControlX = Number.parseFloat(regExpResults[index + 2]);
          const secondControlY = Number.parseFloat(regExpResults[index + 3]);
          const destinationX = Number.parseFloat(regExpResults[index + 4]);
          const destinationY = Number.parseFloat(regExpResults[index + 5]);
          index += 5;
          if (isRelative) {
            path.addCurve(
              firstControlX,
              firstControlY,
              secondControlX,
              secondControlY,
              destinationX,
              destinationY,
              isRelative);
          }
          else {
            // Movement paths always start at (0;0).
            path.addCurve(
              -originX + firstControlX,
              -originY + firstControlY,
              -originX + secondControlX,
              -originY + secondControlY,
              -originX + destinationX,
              -originY + destinationY,
              isRelative);
          }
          break;
        }
      case "s":
        {
          if (regExpResults.length < index + 3) {
            break;
          }
          const secondControlX = Number.parseFloat(regExpResults[index + 0]);
          const secondControlY = Number.parseFloat(regExpResults[index + 1]);
          const destinationX = Number.parseFloat(regExpResults[index + 2]);
          const destinationY = Number.parseFloat(regExpResults[index + 3]);
          index += 3;
          if (isRelative) {
            path.addSmoothCurve(
              secondControlX,
              secondControlY,
              destinationX,
              destinationY,
              isRelative);
          }
          else {
            // Movement paths always start at (0;0).
            path.addSmoothCurve(
              -originX + secondControlX,
              -originY + secondControlY,
              -originX + destinationX,
              -originY + destinationY,
              isRelative);
          }
          break;
        }
      case "l":
        {
          if (regExpResults.length < index + 1) {
            break;
          }
          const destinationX = Number.parseFloat(regExpResults[index + 0]);
          const destinationY = Number.parseFloat(regExpResults[index + 1]);
          index++;
          if (isRelative) {
            path.addLine(
              destinationX,
              destinationY,
              isRelative);
          }
          else {
            // Movement paths always start at (0;0).
            path.addLine(
              -originX + destinationX,
              -originY + destinationY,
              isRelative);
          }
          break;
        }
      case "m":
        {
          if (regExpResults.length < index + 1) {
            break;
          }
          if (index === 1) {
            originX = Number.parseFloat(regExpResults[index + 0]) || 0;
            originY = Number.parseFloat(regExpResults[index + 1]) || 0;
          }
          index++;
          currentAction = "l";
          break;
        }
      case "h":
        {
          if (regExpResults.length < index) {
            break;
          }
          const destinationX = Number.parseFloat(regExpResults[index + 0]);
          const destinationY = 0;
          if (isRelative) {
            path.addLine(
              destinationX,
              destinationY,
              isRelative);
          }
          else {
            // Movement paths always start at (0;0).
            path.addLine(
              -originX + destinationX,
              -originY + destinationY,
              isRelative);
          }
          break;
        }
      case "v":
        {
          if (regExpResults.length < index) {
            break;
          }
          const destinationX = 0;
          const destinationY = Number.parseFloat(regExpResults[index + 0]);
          if (isRelative) {
            path.addLine(
              destinationX,
              destinationY,
              isRelative);
          }
          else {
            // Movement paths always start at (0;0).
            path.addLine(
              -originX + destinationX,
              -originY + destinationY,
              isRelative);
          }
          break;
        }
      case "z":
        {
          path.close();
          break;
        }
      default:
        break;
    }
  }
//  if (originX !== 0 && originY !== 0) {
//    path.translate(-originX, -originY);
//    path.curves[0].getOriginX = 0;
//  }
  return path;
}

/**
 * @param {CurvedPath} path
 */
CurvedPath.toSvg = function (path) {
  let svgString = '';
  for (const curve of path.curves) {
    svgString += 'C'
    for (const point of curve.points) {
      svgString += `${point[0]},${point[1]} `;
    }
  }
  return svgString;
}

gdjs.__curvedMovementExtension = gdjs.__curvedMovementExtension || {};
gdjs.__curvedMovementExtension.CurvedPath = CurvedPath;


};
gdjs.evtsExt__CurvedMovement__DefineHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__DefineHelperClasses.userFunc0x818590(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__CurvedMovement__DefineHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CurvedMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CurvedMovement"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CurvedMovement__DefineHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CurvedMovement__DefineHelperClasses.registeredGdjsCallbacks = [];