# Native PowerShell HTTP Static File Server

$port = 3000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Local server listening on http://localhost:$port/"
Write-Host "Press Ctrl+C to terminate."

$baseDir = $PSScriptRoot

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $rawPath = $request.Url.LocalPath
        if ($rawPath -eq "/") {
            $rawPath = "/index.html"
        }
        
        # Safe URL path join
        $cleanPath = $rawPath.Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        if ($cleanPath.StartsWith([System.IO.Path]::DirectorySeparatorChar)) {
            $cleanPath = $cleanPath.Substring(1)
        }
        $filePath = [System.IO.Path]::Combine($baseDir, $cleanPath)
        
        if (Test-Path $filePath -PathType Leaf) {
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "text/plain"
            switch ($extension) {
                ".html"  { $contentType = "text/html; charset=utf-8" }
                ".css"   { $contentType = "text/css; charset=utf-8" }
                ".js"    { $contentType = "application/javascript; charset=utf-8" }
                ".json"  { $contentType = "application/json; charset=utf-8" }
                ".png"   { $contentType = "image/png" }
                ".jpg"   { $contentType = "image/jpeg" }
                ".jpeg"  { $contentType = "image/jpeg" }
                ".webp"  { $contentType = "image/webp" }
                ".gif"   { $contentType = "image/gif" }
                ".svg"   { $contentType = "image/svg+xml" }
                ".ico"   { $contentType = "image/x-icon" }
                ".woff"  { $contentType = "font/woff" }
                ".woff2" { $contentType = "font/woff2" }
                ".ttf"   { $contentType = "font/ttf" }
                ".otf"   { $contentType = "font/otf" }
                ".mp4"   { $contentType = "video/mp4" }
                ".webm"  { $contentType = "video/webm" }
                ".mp3"   { $contentType = "audio/mpeg" }
                ".wav"   { $contentType = "audio/wav" }
                ".pdf"   { $contentType = "application/pdf" }
                ".xml"   { $contentType = "application/xml; charset=utf-8" }
                ".txt"   { $contentType = "text/plain; charset=utf-8" }
            }
            
            $response.ContentType = $contentType
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $response.ContentType = "text/plain"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawPath")
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        
        $response.OutputStream.Close()
    }
} catch {
    Write-Host "Server error occurred: $_"
} finally {
    $listener.Stop()
    Write-Host "Server stopped."
}
