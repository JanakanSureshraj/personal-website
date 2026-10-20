In event-driven systems, successfully publishing a message doesn't guarantee that the downstream service will process it. At scale, this distinction can introduce unexpected complexity and reliability challenges.

## Real-World Production Highlight

Recently, we encountered a production issue where an adaptor delivered approximately 300,000 messages to Azure Service Bus while the consumer service was scaled down to zero replicas and wasn't actively processing messages. The messages accumulated, creating an unexpected backlog that eventually required cleanup. As an immediate mitigation, we paused the publishing service to prevent further messages from entering the system.

This highlighted an important distinction: **message delivery and message consumption are separate aspects of system reliability.** When consumers stop processing messages, backlogs can grow, storage resources can be consumed, and downstream workflows can be delayed. Depending on the messages' business value and retention requirements, purging may be an option, but it should be approached carefully to avoid losing events that still need to be processed.


| Term         | Description                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| Namespace    | A container that groups messaging resources, including queues, topics, and subscriptions.                       |
| Queue        | A point-to-point messaging entity that holds messages until they are received and processed by a consumer.      |
| Topic        | A publish-subscribe messaging entity that allows publishers to send messages to multiple subscriptions.         |
| Subscription | A logical message stream within a topic that holds messages for a particular subscriber to receive and process. |


## Reflection

This experience raises important design questions: How should systems detect growing backlogs? When should messages expire through time-to-live (TTL) policies? What retry, alerting, and dead-letter strategies should be in place?

Reliable asynchronous messaging isn't just about moving events between services. It's about ensuring they can be processed, monitored, and recovered safely, with minimal disruption to downstream systems.