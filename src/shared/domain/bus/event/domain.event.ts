import { UniqueValueObject } from '../../value_object/unique.value.object';

export class DomainEvent {
    private kind: string;
    private eventId: UniqueValueObject;
    private occurredOn: string;
    private attributes: any;

    constructor(
        eventId: UniqueValueObject,
        kind: string,
        attributes,
        occurredOn: string = null,
    ) {
        this.kind = kind;
        this.attributes = attributes;
        this.eventId = eventId ? eventId : new UniqueValueObject();
        this.occurredOn = occurredOn ? occurredOn : new Date().toString();
    }

    public getKind() {
        return this.kind;
    }

    public getEventId() {
        return this.eventId.getValue();
    }

    public getOccurredOn() {
        return this.occurredOn;
    }

    public getAttributes() {
        return this.attributes;
    }
}
