export const commandData = {
    "Basics": {
        "Solving equations": {
            syntax: "Solve[equation, variable]"
            
        }
    },
    "Methods 1/2": {
        "Linear": {
            "Equations": {
                syntax: "Solve[{equations}, {variables}, Reals]",
                description: "Finds the real values of the variables that makes the expression true." ,
                examples: "Input: Solve[2x + 3 == 5, x, Reals], Output: x -> 1"
            },
            "Inequalities": {
                syntax: "Reduce[{inequalities}, {variables}]",
                description: "Reduces the expression to its simplest form.",
                examples: "Input: Reduce[2x + 3 <= 5, x, Reals], Output: x <= 1"
            },
            "Graphs": {
                syntax: "Plot[{expressions}, {variable, lowerBound, upperBound}]",
                description: "Plots the graph of the expressions over the domain and range specified.",
                examples: "Input: Plot[2x + 3, {x, -10, 10}], Output: Graph of y=2x+3 where -10<=x<=10"
            },
            "Graphs With Parameters": {
                syntax: "Manipulate[Plot[{expressions}, {variables, lowerBound, upperBound}, PlotRange -> {lowerBound, upperBound}], {parameter, lowerBound, upperBound}] ",
                description: "Plots the graph, provides sliders to adjust the parameters as required",
                examples: "Input: Manipulate[Plot[2x + c, {x, -10, 10}], {c, -10, 10}], Output: Graph of y = 2x + c with a slider for the values of c (between [-10, 10])"
            },
            "Distance formula": {
                syntax: "EuclidianDistance[{x1, y1}, {x2, y2}]",
                description: "Finds the distance between two points",
                examples: "Input: EuclidianDistance[{1, 2}, {3, 4}], Output: 2*Sqrt[2]"
            },
            "Midpoint": {
                syntax: "Midpoint[{x1, y1}, {x2, y2}]",
                description: "Finds the midpoint of (x1, y1) and (x2, y2). ",
                examples: "Input: Midpoint[{1, 2}, {3, 4}], Output: {2, 3}"
            }

        },
        "Probability": {
            "Finding Permutations": {
                syntax: "Permutations[{items}] ",
                description: "Finds the different permutations of arranging the items. ",
                examples: "Input: Permutations[{A, B, C}], Output: {{A, B, C}, {A, C, B}, {B, A, C}, {B, C, A}, {C, A, B}, {C, B, A}}"
            },
            "nPr": {
                syntax: "nPr[n_, k_]:= Return[n!/(n-k)!] (Shift + Enter)",
                description: "Finds the number of permutations in which n objects can be arranged in k spots. ",
                examples: "Input: nPr[3, 2], Output: 6"
            },
            "nCr": {
                syntax: "nCr[n_, k_]:= Return[n!/(k!(n-k)!)] (Shift + Enter)",
                description: "Finds the number of combinations in which n objects can be arranged in k spots.",
                examples: "Input: nCr[3, 2], Output: 3"
            }

        },
        "Quadratics": {
            "Factorising": {
                syntax: "Factor[expression]",
                description: "Factorises the expression. ",
                examples: "Input: Factor[x^2+4x+4]//TraditionalForm, Output: (x+2)^2"
            },
            "Completing the square": {
                syntax: "CompleteTheSquare[a_, b_, c_] := Return[a (x - b/(2 a))^2 - b^2/(4 a) + c] (Shift + Enter)",
                description: "Completes the square for the quadratic ax^2+bx+c=0. ",
                examples: "Input: CompleteTheSquare[1, 2, 3], Output: "
            },
            "Discriminant": {
                syntax: "Discriminant[quadratic, x]",
                description: "Finds the discriminant of the quadratic. ",
                examples: "Input: Discriminant[x^2,x], Output: 0"
            }
        },
        "Cubics": {
            "Factorising": {
                syntax: "Factor[expression]",
                description: "Factorises the expression. ",
                examples: "Input: Factor[x^3 + 2 x + 3] // TraditionalForm, Output: (x+1) (x^2-x+3)"
            },
            "Finding Quotient and Remiander from Long Division": {
                syntax: "PolynomialQuotientRemainder[dividend, divisor, x]",
                description: "Returns the quotient and the remainder when the dividend is divided by the divisor",
                examples: "Input: PolynomialQuotientRemainder[x^4 + 2 x + 1, x^2 + 1, x], Output: {-1 + x^2, 2 + 2 x}"
            }
        },
        "Inverses": {
            "Finding Inverse": {
                syntax: "Reduce[f[y]==x, y]",
                description: "Solves the equation f(y)=x for y to find the inverse function.",
                examples: "Input: f[x_] := x^2 + 3 x + 5; Reduce[f[y] == x, y], Output: y == 1/2 (-3 - Sqrt[-11 + 4 x]) || y == 1/2 (-3 + Sqrt[-11 + 4 x])"
            }
        },
        "Exponentials": {
            "Change Of Base": {
                syntax: "ChangeOfBase[a_, b_] := Return[Log[a]/Log[b]]",
                explanation: "Custom function that returns Log[b, a] as (Log[a]/Log[b]).",
                examples: "InputChangeOfBase[3, 2], Output: Log[2]/Log[3]"
            }
        },
        "Circular Functions": {
            "Sine, Cosine, and Tangent": {
                syntax: "Sin[x]",
                explanation: "Finds the sine of the angle given (in radians).",
                examples: "Input: Sin[Pi/4], Output: 1/Sqrt[2]",

                syntax: "Cos[x]",
                explanation: "Finds the cosine of the angle given (in radians).",
                examples: "Input: Cos[Pi/4], Output: 1/Sqrt[2]",

                syntax: "Tan[x]",
                explanation: "Finds the tangent of the angle given (in radians).",
                examples: "Input: Tan[Pi/4], Output: 1"
            },
            "Solutions within the Domain": {
                syntax: "Solve[equation && domain, x]",
                description: "Finds all solutions to the equation within the specified domain. ",
                examples: "Input: Solve[Cos[2 x] == 0 && 0 <= x <= 2 \[Pi], x], Output: {{x -> \[Pi]/4}, {x -> (3 \[Pi])/4}, {x -> (5 \[Pi])/4}, {x -> (7 \[Pi])/4}}"
            }
        },
        "Derivatives": {
            "Diffing": {
                syntax: "D[function, x]",
                description: "Finds the derivative of the function with respect to x. ",
                examples: "Input: D[x^2,x], Output: 2x"
            },
        },
        "Applications of Differentials": {
            "Tangent Line": {
                syntax: "TangentLine[equation_, value_] := Return[Expand[Reduce[y - (equation /. x -> value) == (D[equation, x] /. x -> value) (x - value), y]] // TraditionalForm]",
                description: "Finds the tangent line to the equation at the specified value. ",
                examples: "Input: TangentLine[x^2, 3], Output: y==6 x-9"
            },
            "Normal Line": {
                syntax: "NormaLine[equation_, value_] := Return[Expand[Reduce[y - (equation /. x -> value) == (-1/D[equation, x] /. x -> value) (x - value), y]] // TraditionalForm]",
                description: "Finds the normal line to the equation at the specified value. ",
                examples: "Input: NormalLine[x^2, 3], Output: y==19/2-x/6"
            },
            "Stationary Points": {
                syntax: "StationaryPoints[function_, x_] := Return[{x, function} /. Solve[D[function, x] == 0, x]]",
                description: "Finds the coordinates of the stationary points of the function. ",
                examples: "Input: StationaryPoints[x^2 + 2, x], Output: {{0, 2}}"
            }
        },
        "Integrals": {
            "Integrate": {
                syntax: "Integrate[function, x]",
                description: "Integrates the required function with respect to x. ",
                examples: "Input: Integrate[x^3,x], Output: x^4/4"
            }
        }        
    },
    "Methods 3/4": {
        "Derivatives": {
            "Diffing": {
                syntax: "D[function, x]",
                description: "Finds the derivative of the function with respect to x. ",
                examples: "Input: D[x^2,x], Output: 2x"
            }
        },
        "Function Families": {
            "Finding coefficients": {
                syntax: "SolveAlways[equation1==equation2, x]",
                description: "Finds the value of the pronumerals so that they are always true for x. ",
                examples: "Input: SolveAlways[(x - 2)^2 + 3 == a x^2 + b x + c, x], Output: {{a -> 1, b -> -4, c -> 7}}"
            }
        },
        "Polynomials": {
            "Completing the square": {
                syntax: "CompleteTheSquare[a_, b_, c_] := Return[a (x - b/(2 a))^2 - b^2/(4 a) + c] (Shift + Enter)",
                description: "Completes the square for the quadratic ax^2+bx+c=0. ",
                examples: "Input: CompleteTheSquare[1, 2, 3], Output: "
            },
            "Discriminant": {
                syntax: "Discriminant[quadratic, x]",
                description: "Finds the discriminant of the quadratic. ",
                examples: "Input: Discriminant[x^2,x], Output: 0"
            },
            "Factorising": {
                syntax: "Factor[expression]",
                description: "Factorises the expression. ",
                examples: "Input: Factor[x^3 + 2 x + 3] // TraditionalForm, Output: (x+1) (x^2-x+3)"
            },
            "Finding Quotient and Remiander from Long Division": {
                syntax: "PolynomialQuotientRemainder[dividend, divisor, x]",
                description: "Returns the quotient and the remainder when the dividend is divided by the divisor",
                examples: "Input: PolynomialQuotientRemainder[x^4 + 2 x + 1, x^2 + 1, x], Output: {-1 + x^2, 2 + 2 x}"
            }
        },
        "Circular Functions": {
            "Solutions within a Domain": {
                syntax: "Solve[equation && domain, x]",
                description: "Finds all solutions to the equation within the specified domain. ",
                examples: "Input: Solve[Cos[2 x] == 0 && 0 <= x <= 2 \[Pi], x], Output: {{x -> \[Pi]/4}, {x -> (3 \[Pi])/4}, {x -> (5 \[Pi])/4}, {x -> (7 \[Pi])/4}}"
            }
        },
        "Combinatorics": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Discrete Probability": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Binomial Distribution": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Continuous Variables": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Normal Distribution": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Sampling Theory": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
    },
    "Spec 1/2": {
        "Sequences": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Modulus": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Partial Fractions": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Triangle & Circle Mensuration": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Vectors": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Matrices": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Further Trig": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Complex Numbers": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Complex Subsets": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Kinematics": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Counting Principles": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Proofs": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Logic": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Graph Theory": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
        "Random Variables": {
            "command1": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command2": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command3": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command4": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command5": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command6": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command7": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command8": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command9": {
                syntax: "",
                description: "",
                examples: ""
            },
            "command10": {
                syntax: "",
                description: "",
                examples: ""
            }
        },
    }
};