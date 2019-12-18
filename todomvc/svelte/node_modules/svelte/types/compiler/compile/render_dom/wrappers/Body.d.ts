import Block from '../Block';
import Wrapper from './shared/Wrapper';
import Body from '../../nodes/Body';
import { Identifier } from 'estree';
export default class BodyWrapper extends Wrapper {
    node: Body;
    render(block: Block, _parent_node: Identifier, _parent_nodes: Identifier): void;
}
