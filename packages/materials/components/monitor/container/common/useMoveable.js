import { useState, useRef, useReducer } from 'react';
import { useComponent } from '../../../useComponent';

const initialState = { zoom: 1 };
const reducer = (state, action) => {
    if (action.type == 'add') {
        return {
            zoom: state.zoom + 0.1
        }
    };
    if (action.type == 'reduce' && state.zoom > 0.2) {
        return {
            zoom: state.zoom - 0.1
        }
    };
    if (action.type == 'init') {
        return {
            zoom: 1
        }
    }
    return {
        zoom: state.zoom
    }
}
function useMovable(props) {
    const [targets, setTargets] = useState([]);
    const [zoomSize, setZoomSize] = useReducer(reducer, initialState);
    const [selectedNodes, setSelectedNodes] = useState([]);
    const viewerRef = useRef(null);
    
    return {
        targets,
        zoomSize,
        viewerRef,
        selectedNodes,
        setTargets,
        setZoomSize,
        setSelectedNodes,
        ...(props? useComponent(props) : {})
    }
}

export default useMovable;