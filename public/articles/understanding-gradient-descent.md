Gradient descent is an optimisation method used to adjust a model's parameters so that its loss becomes smaller. Imagine standing on a hillside in fog: you can’t see the whole landscape, but you can estimate which direction slopes downward from where you are.

## The update rule

For parameters $\theta$, learning rate $\eta$, and loss function $J(\theta)$, a gradient descent step is:

$$
\theta_{t+1} = \theta_t - \eta \nabla_\theta J(\theta_t)
$$

The gradient points toward the direction of steepest increase, so subtracting it moves the parameters downhill. The learning rate controls the step size.

## What does the learning rate do?

| Learning rate | Typical behaviour |
| --- | --- |
| Too small | Learning is stable but can be very slow. |
| Reasonable | Loss often decreases steadily. |
| Too large | Updates may overshoot and the loss can diverge. |

## A useful mental model

1. Make a prediction with the current parameters.
2. Measure the error using a loss function.
3. Calculate the gradient of that loss.
4. Update the parameters and repeat.

In practice, variants such as stochastic gradient descent and Adam estimate or adapt updates in different ways. The core idea remains the same: use information about the slope of the loss to improve the parameters step by step.
