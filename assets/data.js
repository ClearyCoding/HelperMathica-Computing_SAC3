export const commandData = {
    "Basics": {},
    "Methods 1/2": {
        "Linear": {
            "Equations": {
                syntax: "Solve[{equations}, {variables}, Reals]",
                description: "Finds the real values of the variables that makes the expression true." ,
                example: "Input: Solve[2x + 3 == 5, x, Reals], Output: x -> 1"
            },
            "Inequalities": {
                syntax: "Reduce[{inequalities}, {variables}]",
                description: "Reduces the expression to its simplest form.",
                example: "Input: Reduce[2x + 3 <= 5, x, Reals], Output: x <= 1"
            },
            "Graphs": {
                syntax: "Plot[{expressions}, {variable, lowerBound, upperBound}]",
                description: "Plots the graph of the expressions over the domain and range specified.",
                example: "Input: Plot[2x + 3, {x, -10, 10}], Output: Graph of y=2x+3 where -10<=x<=10"
            },
            "Graphs With Parameters": {
                syntax: "Manipulate[Plot[{expressions}, {variables, lowerBound, upperBound}, PlotRange -> {lowerBound, upperBound}], {parameter, lowerBound, upperBound}] ",
                description: "Plots the graph, provides sliders to adjust the parameters as required",
                example: "Input: Manipulate[Plot[2x + c, {x, -10, 10}], {c, -10, 10}], Output: Graph of y = 2x + c with a slider for the values of c (between [-10, 10])"
            },
            "Distance formula": {
                syntax: "EuclidianDistance[{x1, y1}, {x2, y2}]",
                description: "Finds the distance between two points",
                example: "Input: EuclidianDistance[{1, 2}, {3, 4}], Output: 2*Sqrt[2]"
            },
            "Midpoint": {
                syntax: "Midpoint[{x1, y1}, {x2, y2}]",
                description: "Finds the midpoint of (x1, y1) and (x2, y2). ",
                example: "Input: Midpoint[{1, 2}, {3, 4}], Output: {2, 3}"
            }

        },
        "Probability": {
            "Finding Permutations": {
                syntax: "Permutations[{items}] ",
                description: "Finds the different permutations of arranging the items. ",
                example: "Input: Permutations[{A, B, C}], Output: {{A, B, C}, {A, C, B}, {B, A, C}, {B, C, A}, {C, A, B}, {C, B, A}}"
            },
            "nPr": {
                syntax: "nPr[n_, k_]:= Return[n!/(n-k)!] (Shift + Enter)",
                description: "Finds the number of permutations in which n objects can be arranged in k spots. ",
                example: "Input: nPr[3, 2], Output: 6"
            },
            "nCr": {
                syntax: "nCr[n_, k_]:= Return[n!/(k!(n-k)!)] (Shift + Enter)",
                description: "Finds the number of combinations in which n objects can be arranged in k spots.",
                example: "Input: nCr[3, 2], Output: 3"
            }

        },
        "Quadratics": {
            "Factorising": {
                syntax: "Factor[expression]",
                description: "Factorises the expression. ",
                example: "Input: Factor[x^2+4x+4]//TraditionalForm, Output: (x+2)^2"
            },
            "Completing the square": {
                syntax: "CompleteTheSquare[a_, b_, c_] := Return[a (x - b/(2 a))^2 - b^2/(4 a) + c] (Shift + Enter)",
                description: "Completes the square for the quadratic ax^2+bx+c=0. ",
                example: "Input: CompleteTheSquare[1, 2, 3], Output: "
            },
            "Discriminant": {
                syntax: "",
                description: "",
                example: ""
            },
            "Plotting graphs": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Cubics": {
            "Factorising": {
                syntax: "",
                description: "",
                example: ""
            },
            "Finding Quotient and Remiander from Long Division": {
                syntax: "PolynomialQuotientRemainder[dividend, divisor, x]",
                description: "Returns the quotient and the remainder when the dividend is divided by the divisor",
                example: "Input: PolynomialQuotientRemainder[x^4 + 2 x + 1, x^2 + 1, x], Output: {-1 + x^2, 2 + 2 x}"
            }
        },
        "Inverses": {
            "Finding Inverse": {
                syntax: "Reduce[f[y]==x, y]",
                description: "Solves the equation f(y)=x for y to find the inverse function.",
                example: "Input: f[x_] := x^2 + 3 x + 5; Reduce[f[y] == x, y], Output: y == 1/2 (-3 - Sqrt[-11 + 4 x]) || y == 1/2 (-3 + Sqrt[-11 + 4 x])"
            }
        },
        "Trigonometry": {
            "Solutions within the Domain": {
                syntax: "Solve[equation && domain, x]",
                description: "Finds all solutions to the equation within the specified domain. ",
                example: "Input: Solve[Cos[2 x] == 0 && 0 <= x <= 2 \[Pi], x], Output: {{x -> \[Pi]/4}, {x -> (3 \[Pi])/4}, {x -> (5 \[Pi])/4}, {x -> (7 \[Pi])/4}}"
            }
        },
        "Differentials": {
            "Diffing": {
                syntax: "D[function, x]",
                description: "Finds the derivative of the function with respect to x. ",
                example: "Input: D[x^2,x], Output: 2x"
            },
        },
        "Applications of Differentials": {
            "Tangent Line": {
                syntax: "TangentLine[equation_, value_] := Return[Expand[Reduce[y - (equation /. x -> value) == (D[equation, x] /. x -> value) (x - value), y]] // TraditionalForm]",
                description: "Finds the tangent line to the equation at the specified value. ",
                example: "Input: TangentLine[x^2, 3], Output: y==6 x-9"
            },
            "Normal Line": {
                syntax: "NormaLine[equation_, value_] := Return[Expand[Reduce[y - (equation /. x -> value) == (-1/D[equation, x] /. x -> value) (x - value), y]] // TraditionalForm]",
                description: "Finds the normal line to the equation at the specified value. ",
                example: "Input: NormalLine[x^2, 3], Output: y==19/2-x/6"
            },
            "Stationary Points": {
                syntax: "StationaryPoints[function_, x_] := Return[{x, function} /. Solve[D[function, x] == 0, x]]",
                description: "Finds the coordinates of the stationary points of the function. ",
                example: "Input: StationaryPoints[x^2 + 2, x], Output: {{0, 2}}"
            }
        },
        "Integrals": {
            "Integrate": {
                syntax: "Integrate[function, x]",
                description: "Integrates the required function with respect to x. ",
                example: "Input: Integrate[x^3,x], Output: x^4/4"
            }
        }        
    },
    "Methods 3/4": {
        "Differentials": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Functions": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Function Families": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Polynomials": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Exponentials": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Trigonometry": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Applications of Differentials": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Integrals": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Combinatorics": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Discrete Probability": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Binomail Distribution": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Continuous Variables": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Normal Distribution": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Sampling": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
    },
    "Specialist 1/2": {
        "Sequences": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Modulus": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Partial Fractions": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Triangle Circle Mensuration": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Vectors": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Matrices": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Further Trigonometry": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Complex Numbers": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Complex Subsets": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Kinematics": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Counting": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Proofs": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Logic": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Graph Theory": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
        "Random Variables": {
            "command1": {
                syntax: "",
                description: "",
                example: ""
            },
            "command2": {
                syntax: "",
                description: "",
                example: ""
            },
            "command3": {
                syntax: "",
                description: "",
                example: ""
            },
            "command4": {
                syntax: "",
                description: "",
                example: ""
            },
            "command5": {
                syntax: "",
                description: "",
                example: ""
            },
            "command6": {
                syntax: "",
                description: "",
                example: ""
            },
            "command7": {
                syntax: "",
                description: "",
                example: ""
            },
            "command8": {
                syntax: "",
                description: "",
                example: ""
            },
            "command9": {
                syntax: "",
                description: "",
                example: ""
            },
            "command10": {
                syntax: "",
                description: "",
                example: ""
            }
        },
    }
};