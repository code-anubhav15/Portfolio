import html_icon from '../../assets/img/html.png'
import css_icon from '../../assets/img/css.png'
import js_icon from '../../assets/img/javascript.png'
import react_icon from '../../assets/img/react.png'
import cpp_icon from '../../assets/img/cpp.png'
import python_icon from '../../assets/img/python.png'
import clang_icon from '../../assets/img/clang.png'
import git_icon from '../../assets/img/git.png'
import bootstrap_icon from '../../assets/img/bootstrap.png'
import np_icon from '../../assets/img/numpy.png'
import pd_icon from '../../assets/img/pandas.png'
import sns_icon from '../../assets/img/seaborn.png'
import plt_icon from '../../assets/img/matplotlib.png'
import sklearn_icon from '../../assets/img/sklearn.png'
import jupyter_icon from '../../assets/img/jupyter.png'

const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 'Advanced', icon: html_icon },
      { name: 'ReactJs', level: 'Intermediate', icon: react_icon },
      { name: 'CSS', level: 'Intermediate', icon: css_icon },
      { name: 'Javascript', level: 'Intermediate', icon: js_icon },
      { name: 'Git', level: 'Intermediate', icon: git_icon },
      { name: 'Bootstrap', level: 'Intermediate', icon: bootstrap_icon }
    ]
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Numpy', level: 'Advanced', icon: np_icon },
      { name: 'Pandas', level: 'Intermediate', icon: pd_icon },
      { name: 'Matplotlib', level: 'Intermediate', icon: plt_icon },
      { name: 'Seaborn', level: 'Intermediate', icon: sns_icon },
      { name: 'Scikit-Learn', level: 'Intermediate', icon: sklearn_icon },
      { name: 'Jupyter Notebook', level: 'Advanced', icon: jupyter_icon }
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C', level: 'Advanced', icon: clang_icon },
      { name: 'C++', level: 'Intermediate', icon: cpp_icon },
      { name: 'Python', level: 'Intermediate', icon: python_icon },
      { name: 'Javascript', level: 'Intermediate', icon: js_icon }
    ]
  }
];

export default skillsData