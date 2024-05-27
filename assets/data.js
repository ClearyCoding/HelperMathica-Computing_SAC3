export const commandData = {
    "Basics": {
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
        }
    },
    "10 Core Maths": {
        "Linear": {
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
        "Trig": {
            "Sine, Cosine, and Tangent": {
                syntax: "Sin[x]",
                description: "Finds the sine of the angle given (in radians).",
                example: "Input: Sin[Pi/4], Output: 1/Sqrt[2]",

                syntax2: "Cos[x]",
                description2: "Finds the cosine of the angle given (in radians).",
                example2: "Input: Cos[Pi/4], Output: 1/Sqrt[2]",

                syntax3: "Tan[x]",
                description3: "Finds the tangent of the angle given (in radians).",
                example3: "Input: Tan[Pi/4], Output: 1"
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
                syntax: "Discriminant[quadratic, x]",
                description: "Finds the discriminant of the quadratic. ",
                example: "Input: Discriminant[x^2,x], Output: 0"
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
        "Exponentials & Logs": {
            "Change Of Base": {
                syntax: "ChangeOfBase[a_, b_] := Return[Log[a]/Log[b]]",
                description: "Custom function that returns Log[b, a] as (Log[a]/Log[b]).",
                example: "InputChangeOfBase[3, 2], Output: Log[2]/Log[3]"
            }
        }
    },    
    "Methods 1/2": {
        "Linear": {
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
                syntax: "Discriminant[quadratic, x]",
                description: "Finds the discriminant of the quadratic. ",
                example: "Input: Discriminant[x^2,x], Output: 0"
            }
        },
        "Cubics": {
            "Factorising": {
                syntax: "Factor[expression]",
                description: "Factorises the expression. ",
                example: "Input: Factor[x^3 + 2 x + 3] // TraditionalForm, Output: (x+1) (x^2-x+3)"
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
        "Exponentials & Logs": {
            "Change Of Base": {
                syntax: "ChangeOfBase[a_, b_] := Return[Log[a]/Log[b]]",
                description: "Custom function that returns Log[b, a] as (Log[a]/Log[b]).",
                example: "InputChangeOfBase[3, 2], Output: Log[2]/Log[3]"
            }
        },
        "Circular Functions": {
            "Sine, Cosine, and Tangent": {
                syntax: "Sin[x]",
                description: "Finds the sine of the angle given (in radians).",
                example: "Input: Sin[Pi/4], Output: 1/Sqrt[2]",

                syntax2: "Cos[x]",
                description2: "Finds the cosine of the angle given (in radians).",
                example2: "Input: Cos[Pi/4], Output: 1/Sqrt[2]",

                syntax3: "Tan[x]",
                description3: "Finds the tangent of the angle given (in radians).",
                example3: "Input: Tan[Pi/4], Output: 1"
            },
            "Solutions within the Domain": {
                syntax: "Solve[equation && domain, x]",
                description: "Finds all solutions to the equation within the specified domain. ",
                example: "Input: Solve[Cos[2 x] == 0 && 0 <= x <= 2 \[Pi], x], Output: {{x -> \[Pi]/4}, {x -> (3 \[Pi])/4}, {x -> (5 \[Pi])/4}, {x -> (7 \[Pi])/4}}"
            }
        },
        "Derivatives": {
            "Diffing": {
                syntax: "D[function, x]",
                description: "Finds the derivative of the function with respect to x. ",
                example: "Input: D[x^2,x], Output: 2x"
            },
        },
        "Applications of Derivatives": {
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
            "Integration": {
                syntax: "Integrate[function, x]",
                description: "Integrates the required function with respect to x. ",
                example: "Input: Integrate[x^3,x], Output: x^4/4"
            }
        }        
    },
    "Methods 3/4": {
        "Derivatives": {
            "Diffing": {
                syntax: "D[function, x]",
                description: "Finds the derivative of the function with respect to x. ",
                example: "Input: D[x^2,x], Output: 2x"
            }
        },
        "Function Families": {
            "Finding coefficients": {
                syntax: "SolveAlways[equation1==equation2, x]",
                description: "Finds the value of the pronumerals so that they are always true for x. ",
                example: "Input: SolveAlways[(x - 2)^2 + 3 == a x^2 + b x + c, x], Output: {{a -> 1, b -> -4, c -> 7}}"
            }
        },
        "Polynomials": {
            "Completing the square": {
                syntax: "CompleteTheSquare[a_, b_, c_] := Return[a (x - b/(2 a))^2 - b^2/(4 a) + c] (Shift + Enter)",
                description: "Completes the square for the quadratic ax^2+bx+c=0. ",
                example: "Input: CompleteTheSquare[1, 2, 3], Output: "
            },
            "Discriminant": {
                syntax: "Discriminant[quadratic, x]",
                description: "Finds the discriminant of the quadratic. ",
                example: "Input: Discriminant[x^2,x], Output: 0"
            },
            "Factorising": {
                syntax: "Factor[expression]",
                description: "Factorises the expression. ",
                example: "Input: Factor[x^3 + 2 x + 3] // TraditionalForm, Output: (x+1) (x^2-x+3)"
            },
            "Finding Quotient and Remiander from Long Division": {
                syntax: "PolynomialQuotientRemainder[dividend, divisor, x]",
                description: "Returns the quotient and the remainder when the dividend is divided by the divisor",
                example: "Input: PolynomialQuotientRemainder[x^4 + 2 x + 1, x^2 + 1, x], Output: {-1 + x^2, 2 + 2 x}"
            }
        },
        "Circular Functions": {
            "Sine, Cosine, and Tangent": {
                syntax: "Sin[x]",
                description: "Finds the sine of the angle given (in radians).",
                example: "Input: Sin[Pi/4], Output: 1/Sqrt[2]",

                syntax2: "Cos[x]",
                description2: "Finds the cosine of the angle given (in radians).",
                example2: "Input: Cos[Pi/4], Output: 1/Sqrt[2]",

                syntax3: "Tan[x]",
                description3: "Finds the tangent of the angle given (in radians).",
                example3: "Input: Tan[Pi/4], Output: 1"
            },
            "Solutions within a Domain": {
                syntax: "Solve[equation && domain, x]",
                description: "Finds all solutions to the equation within the specified domain. ",
                example: "Input: Solve[Cos[2 x] == 0 && 0 <= x <= 2 \[Pi], x], Output: {{x -> \[Pi]/4}, {x -> (3 \[Pi])/4}, {x -> (5 \[Pi])/4}, {x -> (7 \[Pi])/4}}"
            }
        },
        "Applications of Derivatives": {
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
            "Integration": {
                syntax: "Integrate[function, x]",
                description: "Integrates the required function with respect to x. ",
                example: "Input: Integrate[x^3,x], Output: x^4/4"
            }
        },        
        "Combinatorics": {
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
            },
            "Summation": {
                syntax: "Sum[f, {i, lowerBound, upperBound}]",
                description: "Finds the sum of f for all values of i between lowerBound and  upperBound.",
                example: "Input: Sum[i, {i, 0, 10}], Output: 55"
            }
        },
        "Discrete Probability": {
            "Summation": {
                syntax: "Sum[f, {i, lowerBound, upperBound}]",
                description: "Finds the sum of f for all values of i between lowerBound and  upperBound.",
                example: "Input: Sum[i, {i, 0, 10}], Output: 55"
            },
            "Defining discrete probability distributions": {
                syntax: "d = EmpiricalDistribution[{probabilities} -> {xValues}]",
                description: "Defines a discrete probability distribution where each xValue has a defined probability (order matters!).",
                example: "See Mathematica Glossary!"
            }
        },
        "Binomial Distribution": {
            "Calculating probability": {
                syntax: "Probability[X==value, X\[Distributed]BinomialDistribution[n, p]",
                description: "Calculates the probability of X being a certain value for a binomial distribution with n trials and success probability p.",
                example: "Clear[X]; Probability[X==10,X\[Distributed]BinomialDistribution[20,0.4]]"
            },
            "Plotting a binomial distribution": {
                syntax: 'ListPlot[Table[{X,PDF[BinomialDistribution[10,0.4],X]},{X,0,10}],AxesLabel->{x,"p(x)"},PlotRange->{0,0.3}]',
                description: "Plots a sample binomial distribution (change values as required).",
                example: "N/A (see above)"
            }
        },
        "Continuous Variables": {
            "Calculating probability (using integrals)": {
                syntax: "f[x]:= rule; Integrate[f[x],{x,a,b}]",
                description: "Finds the probability of a <= x <= b.",
                example: "f[x]:= -3/4*x*(x-2); Integrate[f[x],{x,0,1/2}]"
            },
            "Defining a probability distribution": {
                syntax: "f[x]:= rule; d = ProbabilityDistribution[f[x],{x,a,b}]",
                description: "Defines d as the probability distribution for f[x] where a <= x <= b.",
                example: "Input: f[x]:= -3/4*x*(x-2); d = ProbabilityDistribution[f[x],{x,0,2}], Output: ProbabilityDistribution[-(3/4) (-2 + \[FormalX]) \[FormalX], {\[FormalX], 0, 2}]"
            },
            "Calculating mean, variance, and standard deviation": {
                syntax: "Mean[d]",
                description: "Calculates the mean for the probability distribution d.",
                example: "Input: Mean[ProbabilityDistribution[-3/4*x*(x-2),{x,0,2}]], Output: 1",

                syntax2: "Variance[d]",
                description2: "Calculates the variance for the probability distribution d.",
                example2: "Input: Variance[ProbabilityDistribution[-3/4*x*(x-2),{x,0,2}]], Output: 1/5",

                syntax3: "StandardDeviation[d]",
                description3: "Calculates the standard deviation for the probability distribution d.",
                example3: "Input: StandardDeviation[ProbabilityDistribution[-3/4*x*(x-2),{x,0,2}]], Output: 1/Sqrt[5]",

                
            }
        },
        "Normal Distribution": {
            "Defining a normal distribution": {
                syntax: "d = NormalDistribution[mean, standardDeviation]",
                description: "Defines d as the normal distribution given the mean and standard deviation.",
                example: "Input: d = NormalDistribution[100, 15], Output: NormalDistribution[100, 15]"
            }
        }
    },
    "Spec 1/2": {
        "Sequences & Series": {
            "Defining a recurrence relation": {
                syntax: "t[n_]:=r * t[n-1] + d; t[1]:= a",
                description: "Defines a recurrence relation with first term a, common difference d, and common ratio r. ",
                example: ""
            },
            "Defining an arithmetic/geometric sequence": {
                syntax: "t[n_]:= a + (n - 1) * d",
                description: "Defines an arithmetic sequence with first term a and common difference d. ",
                example: "",

                syntax2: "t[n_]:= a * r ^ (n - 1)",
                description2: "Defines an geometric sequence with first term a and common ratio r. ",
                example2: ""
            },
            "Finding an arithmetic/geometric series": {
                syntax: "Sum[f, {i, lowerBound, upperBound}]",
                description: "Finds the sum of f for all values of i between lowerBound and  upperBound.",
                example: "Input: Sum[t[n], {n, 0, 10}], Output: 20"
            }
        },
        "Modulus": {
            "Finding Absolute Value": {
                syntax: "RealAbs[x]",
                description: "Finds the real absolute value of x.",
                example: "Input: RealAbs[-2], Output: 2"
            }
        },
        "Partial Fractions": {
            "Finding partial fractions": {
                syntax: "Apart[fraction]",
                description: "Resolves a fraction into its partial fractions.",
                example: "Input: Apart[(x + 7)/(x^2 + 5 x + 6)] // TraditionalForm, Output: 5/(x+2)-4/(x+3)"
            }
        },
        "Triangle & Circle Mensuration": {    
            "Finding sector area, segment area, and chord length": {
                syntax: "SectorArea[\[Theta]_, r_] := 1/2 r^2 \[Theta]",
                description: "Custom function that finds the area of a sector.",
                example: "",

                syntax2: "SegementArea[\[Theta]_, r_] := 1/2 r^2 (\[Theta] - Sin[\[Theta]])",
                description2: "Custom function that finds the area of a segment.",
                example2: "",

                syntax3: "ChordLength[\[Theta]_, r_] := 2 r Sin[\[Theta]/2]",
                description3: "Custom function that finds the length of a chord.",
                example3: ""
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
        "Further Trig": {
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
        "Counting Principles": {
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