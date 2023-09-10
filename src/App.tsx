import { useState } from "react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-items-center h-screen">
      <Card className="p-4 flex-column">
        <div className="text-2xl font-bold mb-2">Hello, World!</div>
        <div className="flex items-center justify-center space-x-2">
          <div>
            <Button onClick={() => setCount(count - 1)}>-</Button>
          </div>
          <div>
            <Badge variant="outline">{count}</Badge>
          </div>
          <div>
            <Button onClick={() => setCount(count + 1)}>+</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
