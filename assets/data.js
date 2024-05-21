export const commandData = {
    "11MMET": {
        linear: {
            commands: {
                solvingEquations: {
                    syntax: "Solve[{equations}, {variables}, Reals]",
                    explanation: "Finds the real values of the variables that makes the expression true." ,
                    example: "Input: Solve[2x + 3 == 5, x, Reals], Output: x -> 1"
                }, 
                solvingInequalities: {
                    syntax: "Reduce[{inequalities}, {variables}]", 
                    explanation: "Reduces the expression to its simplest form.", 
                    example: "Input: Reduce[2x + 3 <= 5, x, Reals], Output: x <= 1"
                }, 
                plottingGraphs: {
                    syntax: "Plot[{expressions}, {variable, lowerBound, upperBound}]",
                    explanation: "Plots the graph of the expressions over the domain and range specified.",
                    example: "Input: Plot[2x + 3, {x, -10, 10}], Output: Graph of y=2x+3 where -10<=x<=10"
                }, 
                plottingGraphsWithParameters: {
                    syntax: "Manipulate[Plot[{expressions}, {variables, lowerBound, upperBound}, PlotRange -> {lowerBound, upperBound}], {parameter, lowerBound, upperBound}] ",
                    explanation: "Plots the graph, provides sliders to adjust the parameters as required",
                    example: "Input: Manipulate[Plot[2x + c, {x, -10, 10}], {c, -10, 10}], Output: Graph of y = 2x + c with a slider for the values of c (between [-10, 10])"
                },  
                distance: {
                    syntax: "EuclidianDistance[{x1, y1}, {x2, y2}]",
                    explanation: "Finds the distance between two points",
                    example: "Input: EuclidianDistance[{1, 2}, {3, 4}], Output: 2*Sqrt[2]"   
                }, 
                midpoint: {
                    syntax: "Midpoint[{x1, y1}, {x2, y2}]",
                    explanation: "Finds the midpoint of (x1, y1) and (x2, y2). ",
                    example: "Input: Midpoint[{1, 2}, {3, 4}], Output: {2, 3}"
                }           
            }
        }, 
        probability: {
            commands: {
                findingPermutations: {
                    syntax: "Permutations[{items}] ",
                    explanation: "Finds the different permutations of arranging the items. ",
                    example: "Input: Permutations[{A, B, C}], Output: {{A, B, C}, {A, C, B}, {B, A, C}, {B, C, A}, {C, A, B}, {C, B, A}}"
                }, 
                nPr: {
                    syntax: "nPr[n_, k_]:= Return[n!/(n-k)!] (Shift + Enter)",
                    explanation: "Finds the number of permutations in which n objects can be arranged in k spots. ",
                    example: "Input: nPr[3, 2], Output: 6"
                },
                nCr: {
                    syntax: "nCr[n_, k_]:= Return[n!/(k!(n-k)!)] (Shift + Enter)",
                    explanation: "Finds the number of combinations in which n objects can be arranged in k spots.",
                    example: "Input: nCr[3, 2], Output: 3"
                }               
            }
        }, 
        quadratics: {
            commands: {
                "Factorising": {
                    syntax: "Factor[expression]",
                    explanation: "Factorises the expression. ",
                    example: "Input: Factor[x^2+4x+4]//TraditionalForm, Output: (x+2)^2"
                },
                "Completing the square": {
                    syntax: "CompleteTheSquare[a_, b_, c_] := Return[a (x - b/(2 a))^2 - b^2/(4 a) + c] (Shift + Enter)",
                    explanation: "Completes the square for the quadratic ax^2+bx+c=0. ",
                    example: "Input: CompleteTheSquare[1, 2, 3], Output: "
                },
                "Discriminant": {
                    syntax: "",
                    explanation: "",
                    example: ""
                },
                "Plotting graphs": {
                    syntax: "",
                    explanation: "",
                    example: ""
                } 
            }
        },
        cubics: {
            factorising: {
                syntax: "",
                explanation: "",
                example: ""
            },
            quotientRemainder: {
                syntax: "",
                explanation: "",
                example: ""
            },
            plottingGraphs: {
                syntax: "",
                explanation: "",
                example: ""
            },
            rationalRootTheorem: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        inverses: {
            findingInverse: {
                syntax: "",
                explanation: "",
                example: ""
            },
            poiWithInverse: {
                syntax: "",
                explanation: "",
                example: ""
            }, 
            plottingGraphs: {
                syntax: "",
                explanation: "",
                example: ""
            }          
        },
        exponentials: {
            plottingGraphs: {
                syntax: "",
                explanation: "",
                example: ""
            },
            solvingEquations: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        trig: {
            solvingDomain: {
                syntax: "",
                explanation: "",
                example: ""
            },
            plottingGraphs: {
                syntax: "",
                explanation: "",
                example: ""
            }           
        },
        differentials: {
            diffing: {
                syntax: "",
                explanation: "",
                example: ""
            },            
        },
        appsofDiff: {
            tangentLine: {
                syntax: "",
                explanation: "",
                example: ""
            },
            normalLine: {
                syntax: "",
                explanation: "",
                example: ""
            },
            stationaryPoints: {
                syntax: "",
                explanation: "",
                example: ""
            },
            natureofSP: {
                syntax: "",
                explanation: "",
                example: ""
            }           
        },
        integrals: {
            integrate: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        }          
    }, 
    "12MMET": {
        differentials: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        functions: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        funcFamilies: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        polynomials: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        exponentials: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        trig: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        appsofDiff: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        integrals: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        combs: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        discProb: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        binomDistrib: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        contVars: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        normDistrib: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        sampling: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
    },  
    "11MSPE": {
        sequences: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        modulus: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        partFracs: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        triangleCircleMens: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        vectors: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        matrices: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        furtherTrig: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        complexNums: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        complexSubs: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        kinematics: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        counting: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        proofs: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        logic: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
        graphTheory: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        }, 
        randomVars: {
            command1: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command2: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command3: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command4: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command5: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command6: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command7: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command8: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command9: {
                syntax: "",
                explanation: "",
                example: ""
            },
            command10: {
                syntax: "",
                explanation: "",
                example: ""
            }            
        },
    }
};