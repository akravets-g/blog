import unittest
import os
import sys
import json
from pathlib import Path
def main():
    loader = unittest.TestLoader()
    suite = unittest.TestSuite()
    suite.addTest(loader.loadTestsFromModule(Path("./src/tests")))
    unittest.TextTestRunner().run(suite)

if __name__ == "__main__":
    main()
