"""WSGI entrypoint for PythonAnywhere deployment."""
from __future__ import annotations

import os
import sys
from pathlib import Path

# Add project root to sys.path for PythonAnywhere imports
PROJECT_ROOT = Path(__file__).resolve().parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

# Ensure environment defaults are set
os.environ.setdefault("FLASK_ENV", "production")

from app import app as application  # noqa: E402

# Backwards compatibility for setups expecting `app`
app = application
