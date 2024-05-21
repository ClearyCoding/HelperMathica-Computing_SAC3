export const commandData = {
    "11MMET": {
        T01: {
            name: "Linear Relations and Equations",
            commands: {
                solvingEquations: {
                    syntaxAndExplanations: `
                    Solve[{equations}, {variables}] 
                        Finds the values of the variables that makes the expression true.
                    
                    Solve[{equations}, {variables}, Reals] 
                        Finds the real values of the variables that makes the expression true.
                    `, 
                    examples: `
                    Solving a linear equation
                        Input: Solve[2x + 3 == 5, x, Reals]
                        Output: x -> 1

                    Solving simultaneous equations
                        Input: Solve[x + y == 11 && x - y == 5, {x, y}]
                        Output: x -> 8, y -> 3
                    `
                }, 
                solvingInequalities: {
                    syntaxAndExplanations: `
                    Reduce[{inequalities}, {variables}] 
                        Reduces the expression to its simplest form.
                    `, 
                    examples: `
                    Solving a linear inequality
                        Input: Solve[2x + 3 < 5, x]
                        Output: x < 1
                    `
                }, 
                plottingGraphs: {
                    syntaxAndExplanations: `
                    Plot[{expressions}, {variables, lowerBound, upperBound}, PlotRange -> {lowerBound, upperBound}] 
                        Plots the graph of the expressions over the domain and range specified.
                    `, 
                    examples: `
                    Plotting a linear graph
                        Input: Plot[2x + 3, {x, -10, 10}, PlotRange -> {-10, 10}]
                        Output: Graph specified
                    `
                }, 
                adjustingParameters: {
                    syntaxAndExplanations: `
                    Manipulate[Plot[{expressions}, {variables, lowerBound, upperBound}, PlotRange -> {lowerBound, upperBound}], {parameter, lowerBound, upperBound}] 
                        - Plots the graph of the expressions over the domain and range specified 
                        - Provides sliders to adjust the parameters as required
                    `, 
                    examples: `
                    Plotting a linear graph with a parameter
                        Input: Manipulate[Plot[2x + c, {x, -10, 10}, PlotRange -> {-10, 10}], {c, -10, 10}]
                        Output: Graph of y = 2x + c with a slider for the values of c (between [-10, 10])
                    `
                }               
            }
        }, 
        T02: {
            name: "Counting Methods and Probability",
            commands: {
                solvingEquations: {
                    syntaxAndExplanations: `
                    Solve[{equations}, {variables}] 
                        Finds the values of the variables that makes the expression true.
                    
                    Solve[{equations}, {variables}, Reals] 
                        Finds the real values of the variables that makes the expression true.
                    `, 
                    examples: `
                    Solving a linear equation
                        Input: Solve[2x + 3 == 5, x, Reals]
                        Output: x -> 1

                    Solving simultaneous equations
                        Input: Solve[x + y == 11 && x - y == 5, {x, y}]
                        Output: x -> 8, y -> 3
                    `
                }, 
                solvingInequalities: {
                    syntaxAndExplanations: `
                    Reduce[{inequalities}, {variables}] 
                        Reduces the expression to its simplest form.
                    `, 
                    examples: `
                    Solving a linear inequality
                        Input: Reduce[2x + 3 < 5, x]
                        Output: x < 1
                    `
                }, 
                plottingGraphs: {
                    syntaxAndExplanations: `
                    Plot[{expressions}, {variables, lowerBound, upperBound}, PlotRange -> {lowerBound, upperBound}] 
                        Plots the graph of the expressions over the domain and range specified.
                    `, 
                    examples: `
                    Plotting a linear graph
                        Input: Plot[2x + 3, {x, -10, 10}, PlotRange -> {-10, 10}]
                        Output: Graph of y = 2x + 3
                    `
                }, 
                adjustingParameters: {
                    syntaxAndExplanations: `
                    Manipulate[Plot[{expressions}, {variables, lowerBound, upperBound}, PlotRange -> {lowerBound, upperBound}], {parameter, lowerBound, upperBound}] 
                        - Plots the graph of the expressions over the domain and range specified 
                        - Provides sliders to adjust the parameters as required
                    `, 
                    examples: `
                    Plotting a linear graph with a parameter
                        Input: Manipulate[Plot[2x + c, {x, -10, 10}, PlotRange -> {-10, 10}], {c, -10, 10}]
                        Output: Graph of y = 2x + c with a slider for the values of c (between [-10, 10])
                    `
                }               
            }
        }, 
        T03: {},
        T04: {},
        T05: {},
        T06: {},
        T07: {},
        T08: {},
        T09: {},
        T10: {}          
    }, 
    "12MMET": {
        T01: {}, 
        T02: {}, 
        T03: {},
        T04: {},
        T05: {},
        T06: {},
        T07: {},
        T08: {},
        T09: {},
        T10: {}, 
        T11: {}, 
        T12: {}, 
        T13: {}, 
        T14: {}
    },  
    "11MSPE": {
        T01: {}, 
        T02: {}, 
        T03: {},
        T04: {},
        T05: {},
        T06: {},
        T07: {},
        T08: {},
        T09: {},
        T10: {}, 
        T11: {}, 
        T12: {}, 
        T13: {}, 
        T14: {},
        T15: {} 
    }
};