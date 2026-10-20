In event-driven systems, successfully publishing a message doesn't guarantee that the downstream service will process it. At scale, this distinction can introduce unexpected complexity and reliability challenges.

## Real-World Production Highlight

Recently, we production issue was encountered where an adaptor delivered ~300k messages to Azure Service Bus, while the consumer was scaled down to 0 and wasn't actively listening or processing them. The messages accumulated, creating an unpredicted backlog that eventually required cleanup. The immediate solution was to pause the publishing service from sending any more messages. 

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