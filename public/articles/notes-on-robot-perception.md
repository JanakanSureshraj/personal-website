A robot does not experience the world the way a person does. It receives measurements from sensors—images, distances, inertial readings or wheel motion—and must turn those measurements into a useful estimate of its surroundings.

## From sensors to a representation

A simplified perception pipeline looks like this:

```text
Sensors → Signal processing → Features / model → State estimate → Planner
```

A camera might provide rich visual detail but struggle in poor lighting. A depth sensor can estimate distance directly but may have limited range or be affected by reflective surfaces. Combining different sensors can make a system more robust.

## Common sensor roles

| Sensor | Useful information | Example limitation |
| --- | --- | --- |
| RGB camera | Colour, texture, visual objects | Sensitive to lighting |
| Depth camera / LiDAR | Distance and scene geometry | Range, cost or surface limitations |
| IMU | Acceleration and angular velocity | Drift when integrated over time |
| Wheel encoders | Approximate movement | Slippage causes error |

## The important distinction

Perception is not simply object detection. A robot often needs a consistent estimate of *where it is*, *what is around it*, and *how uncertain that estimate may be*. Those estimates feed into localisation, mapping and planning.

This is a starting note rather than a complete robotics architecture. A useful next step is to study how visual odometry or simultaneous localisation and mapping (SLAM) combines observations over time.
