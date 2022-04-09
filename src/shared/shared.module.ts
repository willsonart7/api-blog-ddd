import { Module } from '@nestjs/common';
import { AggregateRoot } from './domain/aggregate/aggregate.root';
import { DomainEvent } from './domain/bus/event/domain.event';
import { BooleanValueObject } from './domain/value_object/boolean.value.object';
import { IntValueObject } from './domain/value_object/int.value.object';
import { StringValueObject } from './domain/value_object/string.value.object';
import { UniqueValueObject } from './domain/value_object/unique.value.object';
import { GenerateUuid } from './infraestructure/utils/generate.uuid';

@Module({
    imports: [],
    providers: [
        AggregateRoot,
        DomainEvent,
        IntValueObject,
        StringValueObject,
        UniqueValueObject,
        BooleanValueObject,
        GenerateUuid,
    ],
    exports: [
        AggregateRoot,
        DomainEvent,
        IntValueObject,
        StringValueObject,
        UniqueValueObject,
        GenerateUuid,
    ],
})
export class SharedModule {}
