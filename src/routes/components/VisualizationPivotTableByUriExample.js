import React, { Component } from "react";
import { Visualization } from "@gooddata/react-components";
import { projectId, tableVisualizationUri } from "../utils/fixtures";

import ExampleWithExport from "./utils/ExampleWithExport";

export class VisualizationPivotTableByUriExample extends Component {
    render() {
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-bar-chart">
                        <Visualization
                            projectId={projectId}
                            uri={tableVisualizationUri}
                            onExportReady={onExportReady}
                            onLoadingChanged={this.onLoadingChanged}
                            onError={this.onError}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default VisualizationPivotTableByUriExample;