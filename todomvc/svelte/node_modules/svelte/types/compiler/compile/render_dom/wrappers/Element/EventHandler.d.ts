import EventHandler from '../../../nodes/EventHandler';
import Wrapper from '../shared/Wrapper';
import Block from '../../Block';
export default class EventHandlerWrapper {
    node: EventHandler;
    parent: Wrapper;
    constructor(node: EventHandler, parent: Wrapper);
    get_snippet(block: any): any;
    render(block: Block, target: string): void;
}
